'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { RiPhoneLine, RiPlayCircleFill, RiFlagFill, RiArrowRightLine } from '@remixicon/react';

export default function FondsSoutienPatriotiquePage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [montant, setMontant] = useState<string>('');

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getFormattedCode = (code: string) => {
    return code.replace('montant', montant || 'montant');
  };

  const handleTransaction = (code: string) => {
    if (!montant) {
      alert('Veuillez entrer un montant');
      return;
    }
    const formattedCode = getFormattedCode(code);
    window.location.href = `tel:${formattedCode}`;
  };

  const CopyButton = ({ text }: { text: string }) => (
    <button
      onClick={() => handleCopy(text)}
      className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
        copiedText === text
          ? 'bg-green-500 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      }`}
    >
      {copiedText === text ? 'Copié !' : 'Copier'}
    </button>
  );

  const contributionData = [
    { label: 'Prélèvements (Taxes)', amount: 58_191_214_601, percentage: 67.50 },
    { label: 'Retenues obligatoires (Privé)', amount: 1_461_559_118, percentage: 1.70 },
    { label: 'Prélèvements téléphonies mobiles et Canal+', amount: 11_350_193_682, percentage: 13.17 },
    { label: 'Prélèvements produits importés', amount: 6_804_111_827, percentage: 7.89 },
    { label: 'Cessions volontaires sur salaires (Public)', amount: 683_931_962, percentage: 0.79 },
    { label: 'Retenues obligatoires (Public)', amount: 12_658_940_518, percentage: 14.68 },
    { label: 'Contributions volontaires', amount: 1_857_603_595, percentage: 2.16 }
  ];

  const predefinedAmounts = [
    { value: '500', label: '500 FCFA' },
    { value: '5000', label: '5 000 FCFA' },
    { value: '10000', label: '10 000 FCFA' },
    { value: '50000', label: '50 000 FCFA' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#153B3C] text-white py-12 sm:py-16 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Fond-de-soutien/Soutenez.png"
            alt="Fond de soutien patriotique"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#153B3C]/80 to-[#153B3C]/95" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Fonds de Soutien Patriotique
                </h1>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
                  Ensemble, soutenons notre nation dans sa quête de souveraineté et de développement. 
                  Votre contribution fait la différence.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all">
                  <Link 
                    href="https://my.fasoarzeka.bf/other/ctrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg sm:text-xl rounded-lg">
                      Contribuer au Fonds Patriotique
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/Fond-de-soutien/IMG_4787.JPG"
                  alt="Leadership"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Banner */}
      <section className="bg-primary/5 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/Fond-de-soutien/Soutien_Militaire.png"
                  alt="Impact du FSP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/Fond-de-soutien/Soutenez.png"
                  alt="Réalisations FSP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Performance Exceptionnelle en 2024</h2>
            
            {/* Progress Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">175 Milliards</div>
                <p className="text-gray-600">FCFA collectés en 2024</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: '116.7%'}} />
                </div>
                <p className="text-sm text-gray-500 mt-2">116.7% de l'objectif atteint</p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">45.9 Milliards</div>
                <p className="text-gray-600">FCFA en charges sociales</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: '89.66%'}} />
                </div>
                <p className="text-sm text-gray-500 mt-2">Taux d'engagement</p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">56 Milliards</div>
                <p className="text-gray-600">FCFA en équipements</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: '89.66%'}} />
                </div>
                <p className="text-sm text-gray-500 mt-2">Taux d'engagement</p>
              </div>
            </div>

            {/* Orange Money Code Image */}
            <div className="mb-8 sm:mb-12">
              <div className="relative h-[150px] sm:h-[200px] w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/fond_orange_code.JPG"
                  alt="Code Orange Money"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modalités de Contribution */}
            <div className="bg-primary/5 rounded-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Comment Contribuer ?</h3>
              
              {/* Montant Input */}
              <div className="mb-6 sm:mb-8 bg-white p-4 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold mb-4">Montant de la contribution</h4>
                {/* Predefined Amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => setMontant(amount.value)}
                      className={`p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        montant === amount.value
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
                {/* Custom Amount Input */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="number"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    placeholder="Ou entrez un autre montant"
                    className="w-full sm:flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-gray-600 font-medium">FCFA</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Mobile Money</h4>
                    <div className="space-y-4 bg-white p-4 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="relative w-10 h-10">
                            <Image
                              src="/images/Orange_money_logo.png"
                              alt="Orange Money"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-primary">Orange Money Burkina</p>
                            <RiFlagFill className="w-5 h-5 text-primary" aria-label="Burkina Faso" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          <code className="w-full sm:flex-grow bg-gray-100 p-2 rounded text-sm sm:text-base break-all">
                            {getFormattedCode('*144*10*7480092*montant#')}
                          </code>
                          <div className="flex w-full sm:w-auto space-x-2">
                            <button
                              onClick={() => handleCopy(getFormattedCode('*144*10*7480092*montant#'))}
                              className="flex-1 sm:flex-initial px-3 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors flex items-center justify-center"
                            >
                              Copier
                            </button>
                            <button
                              onClick={() => handleTransaction('*144*10*7480092*montant#')}
                              className="flex-1 sm:flex-initial p-2 text-white bg-primary rounded-md hover:bg-primary/90 flex items-center justify-center"
                              title="Lancer la transaction"
                            >
                              <RiPlayCircleFill className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="relative w-10 h-10">
                            <Image
                              src="/images/Orange_money_logo.png"
                              alt="Orange Money"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-primary">Orange Money Côte d'Ivoire</p>
                            <RiFlagFill className="w-5 h-5 text-[#FF8C00]" aria-label="Côte d'Ivoire" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          <code className="w-full sm:flex-grow bg-gray-100 p-2 rounded text-sm sm:text-base break-all">
                            {getFormattedCode('#144*1*3*1*22611112222*7*montant#')}
                          </code>
                          <div className="flex w-full sm:w-auto space-x-2">
                            <button
                              onClick={() => handleCopy(getFormattedCode('#144*1*3*1*22611112222*7*montant#'))}
                              className="flex-1 sm:flex-initial px-3 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors flex items-center justify-center"
                            >
                              Copier
                            </button>
                            <button
                              onClick={() => handleTransaction('#144*1*3*1*22611112222*7*montant#')}
                              className="flex-1 sm:flex-initial p-2 text-white bg-primary rounded-md hover:bg-primary/90 flex items-center justify-center"
                              title="Lancer la transaction"
                            >
                              <RiPlayCircleFill className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="relative w-10 h-10">
                            <Image
                              src="/images/Moov_money.png"
                              alt="Moov Money"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-primary">Moov Money</p>
                            <RiFlagFill className="w-5 h-5 text-primary" aria-label="Burkina Faso" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          <code className="w-full sm:flex-grow bg-gray-100 p-2 rounded text-sm sm:text-base break-all">
                            {getFormattedCode('*555*2*7*52616161*montant#')}
                          </code>
                          <div className="flex w-full sm:w-auto space-x-2">
                            <button
                              onClick={() => handleCopy(getFormattedCode('*555*2*7*52616161*montant#'))}
                              className="flex-1 sm:flex-initial px-3 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors flex items-center justify-center"
                            >
                              Copier
                            </button>
                            <button
                              onClick={() => handleTransaction('*555*2*7*52616161*montant#')}
                              className="flex-1 sm:flex-initial p-2 text-white bg-primary rounded-md hover:bg-primary/90 flex items-center justify-center"
                              title="Lancer la transaction"
                            >
                              <RiPlayCircleFill className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Versement en espèces / Virement bancaire</h4>
                    <div className="space-y-4 bg-white p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <code className="w-full sm:flex-grow bg-gray-100 p-2 rounded text-sm sm:text-base break-all">
                          BF670-01001-443590001593-15
                        </code>
                        <CopyButton text="BF670-01001-443590001593-15" />
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <code className="w-full sm:flex-grow bg-gray-100 p-2 rounded text-sm sm:text-base break-all">
                          BF000-01001-000000050011-61
                        </code>
                        <CopyButton text="BF000-01001-000000050011-61" />
                      </div>
                    </div>
                  </div>

                  {/* Online Payment Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Paiement en ligne</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex flex-wrap gap-6 mb-4 items-center justify-center">
                        <div className="relative w-20 h-12">
                          <Image
                            src="/images/visalogo.png"
                            alt="Visa"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-20 h-12">
                          <Image
                            src="/images/mastercardlogo.png"
                            alt="Mastercard"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-20 h-12">
                          <Image
                            src="/images/gim_logo.png"
                            alt="GIM UEMOA"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <Link 
                        href="https://my.fasoarzeka.bf/other/ctrb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <span className="font-medium">Contribuer en ligne</span>
                        <RiArrowRightLine className="w-5 h-5" />
                      </Link>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Paiement sécurisé via FasoArzeka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Contributions en nature</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-4">Prendre attache avec la Commission aux numéros suivants :</p>
                      <div className="space-y-2">
                        <a 
                          href="tel:+22670008875"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <RiPhoneLine className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">+226 70 00 88 75</span>
                        </a>
                        <a 
                          href="tel:+22665083210"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <RiPhoneLine className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">+226 65 08 32 10</span>
                        </a>
                        <a 
                          href="tel:+22670525949"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <RiPhoneLine className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">+226 70 52 59 49</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "La commission traduit ses sincères remerciements à l'ensemble des compatriotes, 
                      de l'intérieur comme de l'extérieur, mobilisés autour de l'appel lancé par le Chef de l'Etat.
                      Elle rappelle la nécessité d'un engagement continu et d'une poursuite de l'élan patriotique 
                      eu égard à la persistance des besoins sécuritaires et humanitaires."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Contribution Breakdown */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Répartition des Contributions (1er Janvier - 25 Juin 2024)</h3>
              <div className="space-y-4">
                {contributionData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-primary font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{width: `${item.percentage}%`}} 
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Intl.NumberFormat('fr-FR').format(item.amount)} FCFA
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Dernières Actualités</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">✓</span>
                  <div>
                    <p className="font-semibold">Renouvellement du Fonds pour 2025</p>
                    <p className="text-gray-600">Le Conseil a adopté le renouvellement du Fonds de soutien patriotique pour une durée d'un an renouvelable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">✓</span>
                  <div>
                    <p className="font-semibold">Impact sur le Terrain</p>
                    <p className="text-gray-600">Amélioration significative de la situation sécuritaire grâce aux équipements acquis et à la prise en charge effective des VDP.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Grid with Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="relative h-[200px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Fond-de-soutien/Soutien_Militaire.png"
                    alt="Réalisations"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Réalisations Majeures</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mr-3 mt-1">✓</span>
                    <span>Prise en charge efficace des dépenses sociales des VDP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mr-3 mt-1">✓</span>
                    <span>Renforcement des capacités d'intervention des forces combattantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mr-3 mt-1">✓</span>
                    <span>Mise en place de couvertures d'assurance pour les VDP</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="relative h-[200px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Fond-de-soutien/IMG_4787.JPG"
                    alt="Perspectives"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Perspectives 2025</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Le Fonds continue sa mission avec un objectif renouvelé pour 2025. La mobilisation des ressources reste une priorité pour soutenir les efforts de sécurisation du territoire.
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="https://my.fasoarzeka.bf/other/ctrb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Participer à l'effort national
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 