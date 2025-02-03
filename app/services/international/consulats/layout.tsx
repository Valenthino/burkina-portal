import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Consulats et Ambassades | Burkina Faso',
    description: 'Liste des consulats et ambassades du Burkina Faso à travers le monde',
};

export default function ConsulatsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 