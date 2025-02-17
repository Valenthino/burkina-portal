'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import QRCode from 'qrcode';
import { Sidebar } from '@/components/dashboard/sidebar';
import Image from 'next/image';

interface ApplicationData {
  applicationId: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

export default function CNIBSuccessPage() {
  const searchParams = useSearchParams();
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchApplicationData() {
      const id = searchParams.get('id');
      if (!id) {
        setError('ID de demande manquant');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('cnib_applications')
          .select('*')
          .eq('application_id', id)
          .single();

        if (error) throw error;

        if (!data) {
          setError('Demande non trouvée');
          return;
        }

        // Generate QR Code
        const qrData = {
          applicationId: data.application_id,
          firstName: data.first_name,
          lastName: data.last_name,
          birthDate: data.birth_date,
        };

        const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(qrData));
        setQrCodeUrl(qrCodeDataUrl);
        setApplicationData(qrData);
      } catch (error) {
        console.error('Error fetching application data:', error);
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }

    fetchApplicationData();
  }, [searchParams, supabase]);

  const handleDownload = () => {
    if (!applicationData) return;

    const receiptContent = document.createElement('div');
    receiptContent.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="/images/ONI-v2.jpg" alt="ONI Logo" style="width: 150px; height: auto;"/>
          <h1 style="margin: 20px 0; color: #1a5653;">Office National d'Identification</h1>
          <h2 style="color: #666;">Récépissé de Demande de CNIB</h2>
        </div>

        <div style="margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #1a5653; margin-bottom: 20px;">Demande soumise avec succès</h3>
          <p style="margin: 10px 0;"><strong>Numéro de demande:</strong> ${applicationData.applicationId}</p>
          <p style="margin: 10px 0;"><strong>Nom:</strong> ${applicationData.lastName}</p>
          <p style="margin: 10px 0;"><strong>Prénom:</strong> ${applicationData.firstName}</p>
          <p style="margin: 10px 0;"><strong>Date de naissance:</strong> ${applicationData.birthDate}</p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <img src="${qrCodeUrl}" alt="QR Code" style="width: 200px; height: 200px;"/>
          <p style="color: #666; margin-top: 10px;">QR Code de la demande</p>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <p style="color: #666; margin: 0;">
            <strong>Important:</strong> Veuillez conserver précieusement ce récépissé. 
            Il vous sera demandé lors du retrait de votre CNIB.
          </p>
        </div>

        <div style="margin-top: 30px; text-align: center; color: #666;">
          <p>Date d'émission: ${new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    `;

    const printWindow = window.open('', '', 'height=800,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>CNIB - Récépissé</title></head><body>');
      printWindow.document.write(receiptContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-3xl">
            <Card className="p-6">
              <p className="text-center">Chargement des données de la demande...</p>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (error || !applicationData) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-3xl">
            <Alert variant="destructive">
              <AlertDescription>
                {error || 'Impossible de récupérer les informations de la demande.'}
              </AlertDescription>
            </Alert>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/ONI-v2.jpg"
                  alt="ONI Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#1a5653] mb-2">
                Office National d'Identification
              </h1>
              <p className="text-gray-600">Récépissé de Demande de CNIB</p>
            </div>

            {/* Success Message */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Demande soumise avec succès</h2>
              <p className="text-gray-600 mb-4">
                Votre demande de CNIB a été enregistrée avec succès.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Numéro de demande:</strong> {applicationData.applicationId}
                </p>
                <p className="mb-2">
                  <strong>Nom:</strong> {applicationData.lastName}
                </p>
                <p className="mb-2">
                  <strong>Prénom:</strong> {applicationData.firstName}
                </p>
                <p>
                  <strong>Date de naissance:</strong> {applicationData.birthDate}
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="w-48 h-48 mb-2"
              />
              <p className="text-sm text-gray-500">QR Code de la demande</p>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-blue-800">
                <strong>Important:</strong> Veuillez conserver précieusement ce récépissé. 
                Il vous sera demandé lors du retrait de votre CNIB.
              </p>
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleDownload}
                className="bg-[#1a5653] hover:bg-[#134240] text-white px-8"
              >
                Télécharger le récépissé
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 