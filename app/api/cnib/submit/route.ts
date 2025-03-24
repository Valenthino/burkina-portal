import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import QRCode from 'qrcode';
import { createCanvas } from 'canvas';
import JsBarcode from 'jsbarcode';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const formData = await request.json();

    // Generate QR code
    const qrCodeData = JSON.stringify({
      applicationId: formData.applicationId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      birthDate: formData.birthDate,
    });
    const qrCode = await QRCode.toDataURL(qrCodeData);

    // Generate barcode
    const canvas = createCanvas(400, 100);
    JsBarcode(canvas, formData.applicationId, {
      format: 'CODE128',
      width: 2,
      height: 100,
      displayValue: true,
    });
    const barcode = canvas.toDataURL();

    // Map form data to database schema
    const dbData = {
      application_id: formData.applicationId,
      user_id: formData.userId,
      status: 'pending',
      first_name: formData.firstName,
      last_name: formData.lastName,
      mother_name: formData.motherName,
      father_name: formData.fatherName,
      birth_date: formData.birthDate,
      birth_place: formData.birthPlace,
      nationality: formData.nationality,
      profession: formData.profession,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      gender: formData.gender,
      qr_code: qrCode,
      barcode: barcode,
    };

    // Insert application into database
    const { data, error } = await supabase
      .from('cnib_applications')
      .insert(dbData)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        {
          error: 'Erreur lors de la soumission de la demande',
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        applicationId: data.application_id,
        qrCode: data.qr_code,
        barcode: data.barcode,
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors du traitement de la demande',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}