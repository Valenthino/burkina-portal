--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Homebrew)
-- Dumped by pg_dump version 14.15 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: ministeres; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ministeres (id, nom, description, date_creation, date_modification, categorie, slug) FROM stdin;
1	Ministère de la Défense et des Anciens Combattants	Ministre: Général de Brigade Célestin SIMPORE	2025-01-20 11:25:59.881119	2025-01-20 12:20:15.972647	Défense	defense
2	Ministère de l'Administration territoriale et de la Mobilité	Ministre: Monsieur Emile ZERBO	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.002932	\N	administration-territoriale
3	Ministère de l'Agriculture, des Ressources animales et halieutiques	Ministre: Commandant Ismaël SOMBIE	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.003241	\N	agriculture
4	Ministère de l'Économie et des Finances	Ministre: Monsieur Aboubakar NACANABO	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.00353	\N	economie-finances
5	Ministère de la Sécurité	Ministre: Commissaire divisionnaire de Police Mahamadou SANA	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.00381	\N	securite
6	Ministère des Affaires étrangères	Ministre: Monsieur Karamoko Jean Marie TRAORE	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.00405	Affaires Étrangères	affaires-etrangeres
7	Ministère de la Fonction publique	Ministre: Monsieur Mathias TRAORE	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.004315	\N	fonction-publique
8	Ministère de la Communication	Ministre: Monsieur Pingdwendé Gilbert OUEDRAOGO	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.004551	\N	communication
9	Ministère de l'Action humanitaire	Ministre: Commandant Passowendé Pélagie KABRE/KABORE	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.004779	\N	action-humanitaire
10	Ministère de la Justice	Ministre: Monsieur Edasso Rodrigue BAYALA	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.00498	Justice	justice
11	Ministère de la Santé	Ministre: Monsieur Robert Lucien Jean-Claude KARGOUGOU	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.005208	\N	sante
12	Ministère de la Transition digitale	Ministre: Madame Aminata ZERBO/SABANE	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.005489	\N	transition-digitale
13	Ministère de l'Industrie	Ministre: Monsieur Serge Gnaniodem PODA	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.005685	\N	industrie
14	Ministère des Infrastructures	Ministre: Monsieur Adama Luc SORGHO	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.005939	\N	infrastructures
15	Ministère de l'Énergie	Ministre: Monsieur Yacouba Zabré GOUBA	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.006118	\N	energie
16	Ministère de l'Enseignement de base	Ministre: Monsieur Jacques Sosthène DINGARA	2025-01-20 11:25:59.881119	2025-01-20 12:20:16.006298	\N	enseignement-base
\.


--
-- Data for Name: departements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.departements (id, ministere_id, nom, description, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.services (id, departement_id, nom, description, cout, delai_traitement, documents_requis, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: modeles_flux_travail; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.modeles_flux_travail (id, service_id, nom, description, duree_estimee, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: etapes_flux_travail; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.etapes_flux_travail (id, flux_travail_id, numero_etape, nom, description, role_requis, duree_estimee, obligatoire, date_creation) FROM stdin;
\.


--
-- Data for Name: actions_flux_travail; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.actions_flux_travail (id, etape_id, type_action, parametres, ordre, date_creation) FROM stdin;
\.


--
-- Data for Name: utilisateurs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.utilisateurs (id, nom, prenom, email, telephone, mot_de_passe, date_naissance, genre, adresse, ville, pays, verification_email, actif, date_creation, date_modification) FROM stdin;
5	Admin	System	admin@burkina-portal.gov.bf	+22670000000	$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK	1980-01-01	M	Avenue de l'Indépendance	Ouagadougou	Burkina Faso	f	t	2025-01-18 17:43:27.732911	2025-01-18 17:43:27.732911
6	Ouedraogo	Fatima	f.ouedraogo@burkina-portal.gov.bf	+22675000001	$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK	1985-05-15	F	Rue 15.32	Ouagadougou	Burkina Faso	f	t	2025-01-18 17:43:27.732911	2025-01-18 17:43:27.732911
7	Kabore	Paul	p.kabore@burkina-portal.gov.bf	+22676000002	$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjaDtXIn3ZgK	1990-08-20	M	Avenue Kwame Nkrumah	Bobo-Dioulasso	Burkina Faso	f	t	2025-01-18 17:43:27.732911	2025-01-18 17:43:27.732911
\.


--
-- Data for Name: agents; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.agents (id, utilisateur_id, departement_id, matricule, poste, date_embauche, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.regions (id, nom, code, date_creation) FROM stdin;
15	Boucle du Mouhoun	BM	2025-01-18 17:43:27.729233
16	Cascades	CAS	2025-01-18 17:43:27.729233
17	Centre	CEN	2025-01-18 17:43:27.729233
18	Centre-Est	CE	2025-01-18 17:43:27.729233
19	Centre-Nord	CN	2025-01-18 17:43:27.729233
20	Centre-Ouest	CO	2025-01-18 17:43:27.729233
21	Centre-Sud	CS	2025-01-18 17:43:27.729233
22	Est	EST	2025-01-18 17:43:27.729233
23	Hauts-Bassins	HB	2025-01-18 17:43:27.729233
24	Nord	NO	2025-01-18 17:43:27.729233
25	Plateau Central	PC	2025-01-18 17:43:27.729233
26	Sahel	SAH	2025-01-18 17:43:27.729233
27	Sud-Ouest	SO	2025-01-18 17:43:27.729233
\.


--
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.provinces (id, region_id, nom, code, date_creation) FROM stdin;
\.


--
-- Data for Name: communes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.communes (id, province_id, nom, type, population, date_creation) FROM stdin;
\.


--
-- Data for Name: conditions_flux_travail; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.conditions_flux_travail (id, etape_id, type_condition, criteres, etape_suivante_si_vrai, etape_suivante_si_faux, date_creation) FROM stdin;
\.


--
-- Data for Name: demandes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.demandes (id, utilisateur_id, service_id, statut, numero_reference, donnees_soumises, agent_assigne, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: types_document; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.types_document (id, nom, description, champs_requis, date_creation) FROM stdin;
7	CNI	Carte Nationale d'Identité	{"nom": "string", "photo": "file", "prenom": "string", "date_naissance": "date", "lieu_naissance": "string"}	2025-01-18 17:43:27.751344
8	PASS	Passeport	{"nom": "string", "photo": "file", "prenom": "string", "profession": "string", "date_naissance": "date", "lieu_naissance": "string"}	2025-01-18 17:43:27.751344
9	CJ	Casier Judiciaire	{"nom": "string", "prenom": "string", "date_naissance": "date", "lieu_naissance": "string"}	2025-01-18 17:43:27.751344
\.


--
-- Data for Name: documents_demande; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.documents_demande (id, demande_id, type_document_id, url_document, statut, verifie_par, date_verification, date_creation) FROM stdin;
\.


--
-- Data for Name: documents_utilisateur; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.documents_utilisateur (id, utilisateur_id, type_document_id, numero_document, statut, metadonnees, date_expiration, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: etats_service; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.etats_service (id, service_id, statut, message, derniere_verification, prochaine_maintenance, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: flux_travail_demande; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.flux_travail_demande (id, demande_id, flux_travail_id, etape_courante, statut, date_debut, date_fin, date_modification) FROM stdin;
\.


--
-- Data for Name: historique_etapes_flux_travail; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.historique_etapes_flux_travail (id, flux_travail_demande_id, etape_id, agent_id, statut, commentaires, date_debut, date_fin) FROM stdin;
\.


--
-- Data for Name: historique_statut_demande; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.historique_statut_demande (id, demande_id, statut, notes, modifie_par, date_creation) FROM stdin;
\.


--
-- Data for Name: journaux_acces_service; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journaux_acces_service (id, service_id, utilisateur_id, agent_id, type_acces, statut, temps_reponse, date_creation) FROM stdin;
\.


--
-- Data for Name: journaux_activite; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journaux_activite (id, utilisateur_id, type_activite, description, details, date_creation) FROM stdin;
\.


--
-- Data for Name: journaux_erreur; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journaux_erreur (id, niveau, message, trace_pile, contexte, date_creation) FROM stdin;
\.


--
-- Data for Name: journaux_securite; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journaux_securite (id, utilisateur_id, agent_id, type_evenement, details_evenement, adresse_ip, agent_utilisateur, date_creation) FROM stdin;
\.


--
-- Data for Name: limites_requetes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.limites_requetes (id, adresse_ip, point_acces, nombre_requetes, derniere_requete, date_reinitialisation) FROM stdin;
\.


--
-- Data for Name: missions_ministere; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.missions_ministere (id, description, ministere_id, date_creation) FROM stdin;
1	Élaboration et mise en œuvre de la politique de défense nationale	1	2025-01-20 14:25:55.234695
2	Gestion et modernisation des forces armées	1	2025-01-20 14:25:55.234695
3	Protection du territoire national	1	2025-01-20 14:25:55.234695
4	Coordination des opérations militaires	1	2025-01-20 14:25:55.234695
5	Gestion des anciens combattants et de leurs droits	1	2025-01-20 14:25:55.234695
6	Conduite de la politique étrangère	6	2025-01-20 14:25:55.250975
7	Gestion des relations diplomatiques	6	2025-01-20 14:25:55.250975
8	Promotion de la coopération internationale	6	2025-01-20 14:25:55.250975
9	Protection des intérêts burkinabè à l'étranger	6	2025-01-20 14:25:55.250975
10	Coordination des actions internationales	6	2025-01-20 14:25:55.250975
11	Administration de la justice	10	2025-01-20 14:25:55.268611
12	Protection des droits humains	10	2025-01-20 14:25:55.268611
13	Modernisation du système judiciaire	10	2025-01-20 14:25:55.268611
14	Supervision des établissements pénitentiaires	10	2025-01-20 14:25:55.268611
15	Promotion de l'accès au droit	10	2025-01-20 14:25:55.268611
16	Élaboration et mise en œuvre de la politique économique	4	2025-01-20 14:25:55.281457
17	Gestion des finances publiques	4	2025-01-20 14:25:55.281457
18	Planification et prospective économique	4	2025-01-20 14:25:55.281457
19	Coordination des politiques budgétaires	4	2025-01-20 14:25:55.281457
20	Supervision du système financier	4	2025-01-20 14:25:55.281457
21	Développement de l'infrastructure numérique	12	2025-01-20 14:25:55.287253
22	Modernisation des services postaux	12	2025-01-20 14:25:55.287253
23	Promotion de l'innovation digitale	12	2025-01-20 14:25:55.287253
24	Gestion des télécommunications	12	2025-01-20 14:25:55.287253
25	Cybersécurité et protection des données	12	2025-01-20 14:25:55.287253
26	Gestion du système éducatif	16	2025-01-20 14:25:55.288321
27	Promotion de l'alphabétisation	16	2025-01-20 14:25:55.288321
28	Développement des langues nationales	16	2025-01-20 14:25:55.288321
29	Formation des enseignants	16	2025-01-20 14:25:55.288321
30	Gestion des programmes scolaires	16	2025-01-20 14:25:55.288321
31	Développement de l'agriculture	3	2025-01-20 14:25:55.289323
32	Gestion des ressources animales	3	2025-01-20 14:25:55.289323
33	Développement de la pêche	3	2025-01-20 14:25:55.289323
34	Sécurité alimentaire	3	2025-01-20 14:25:55.289323
35	Modernisation agricole	3	2025-01-20 14:25:55.289323
36	Gestion du système de santé	11	2025-01-20 14:25:55.290114
37	Promotion de l'hygiène publique	11	2025-01-20 14:25:55.290114
38	Prévention des maladies	11	2025-01-20 14:25:55.290114
39	Formation médicale	11	2025-01-20 14:25:55.290114
40	Gestion des hôpitaux	11	2025-01-20 14:25:55.290114
41	Administration du territoire	2	2025-01-20 14:25:55.291133
42	Gestion des collectivités territoriales	2	2025-01-20 14:25:55.291133
43	Organisation des élections	2	2025-01-20 14:25:55.291133
44	Sécurité civile	2	2025-01-20 14:25:55.291133
45	Coordination administrative	2	2025-01-20 14:25:55.291133
46	Gestion des ressources humaines de l'État	7	2025-01-20 14:25:55.292042
47	Modernisation de l'administration publique	7	2025-01-20 14:25:55.292042
48	Formation des agents publics	7	2025-01-20 14:25:55.292042
49	Gestion des carrières et retraites	7	2025-01-20 14:25:55.292042
50	Dialogue social dans la fonction publique	7	2025-01-20 14:25:55.292042
51	Développement des médias publics	8	2025-01-20 14:25:55.292968
52	Régulation de la communication	8	2025-01-20 14:25:55.292968
53	Promotion de la presse nationale	8	2025-01-20 14:25:55.292968
54	Gestion de l'information gouvernementale	8	2025-01-20 14:25:55.292968
55	Développement du numérique	8	2025-01-20 14:25:55.292968
56	Coordination de l'aide humanitaire	9	2025-01-20 14:25:55.293737
57	Gestion des catastrophes naturelles	9	2025-01-20 14:25:55.293737
58	Protection des personnes vulnérables	9	2025-01-20 14:25:55.293737
59	Coordination des ONG humanitaires	9	2025-01-20 14:25:55.293737
60	Gestion des déplacés internes	9	2025-01-20 14:25:55.293737
61	Développement industriel	13	2025-01-20 14:25:55.294407
62	Promotion des investissements	13	2025-01-20 14:25:55.294407
63	Normalisation et qualité	13	2025-01-20 14:25:55.294407
64	Innovation technologique	13	2025-01-20 14:25:55.294407
65	Développement des PME/PMI	13	2025-01-20 14:25:55.294407
66	Développement des infrastructures routières	14	2025-01-20 14:25:55.295237
67	Gestion des travaux publics	14	2025-01-20 14:25:55.295237
68	Développement urbain	14	2025-01-20 14:25:55.295237
69	Maintenance des infrastructures	14	2025-01-20 14:25:55.295237
70	Contrôle des constructions	14	2025-01-20 14:25:55.295237
71	Développement du secteur énergétique	15	2025-01-20 14:25:55.296067
72	Gestion des ressources minières	15	2025-01-20 14:25:55.296067
73	Promotion des énergies renouvelables	15	2025-01-20 14:25:55.296067
74	Électrification rurale	15	2025-01-20 14:25:55.296067
75	Régulation du secteur minier	15	2025-01-20 14:25:55.296067
76	Protection de l'environnement et des ressources naturelles	\N	2025-01-20 14:25:55.296966
77	Gestion des changements climatiques	\N	2025-01-20 14:25:55.296966
78	Conservation de la biodiversité	\N	2025-01-20 14:25:55.296966
79	Lutte contre la désertification	\N	2025-01-20 14:25:55.296966
80	Promotion du développement durable	\N	2025-01-20 14:25:55.296966
81	Développement du sport	\N	2025-01-20 14:25:55.297563
82	Formation des athlètes	\N	2025-01-20 14:25:55.297563
83	Organisation des compétitions	\N	2025-01-20 14:25:55.297563
84	Gestion des infrastructures sportives	\N	2025-01-20 14:25:55.297563
85	Promotion du sport scolaire	\N	2025-01-20 14:25:55.297563
86	Promotion de la culture burkinabè	\N	2025-01-20 14:25:55.298347
87	Protection du patrimoine culturel	\N	2025-01-20 14:25:55.298347
88	Développement des industries culturelles	\N	2025-01-20 14:25:55.298347
89	Organisation des événements culturels	\N	2025-01-20 14:25:55.298347
90	Formation artistique et culturelle	\N	2025-01-20 14:25:55.298347
91	Planification urbaine	\N	2025-01-20 14:25:55.300531
92	Gestion du foncier urbain	\N	2025-01-20 14:25:55.300531
93	Développement des villes	\N	2025-01-20 14:25:55.300531
94	Contrôle des constructions	\N	2025-01-20 14:25:55.300531
95	Amélioration de l'habitat	\N	2025-01-20 14:25:55.300531
96	Développement du commerce intérieur	\N	2025-01-20 14:25:55.301331
97	Promotion du commerce extérieur	\N	2025-01-20 14:25:55.301331
98	Protection des consommateurs	\N	2025-01-20 14:25:55.301331
99	Régulation des prix	\N	2025-01-20 14:25:55.301331
100	Développement des échanges commerciaux	\N	2025-01-20 14:25:55.301331
101	Développement de l'enseignement supérieur	\N	2025-01-20 14:25:55.301947
102	Gestion des universités publiques	\N	2025-01-20 14:25:55.301947
103	Promotion de la recherche scientifique	\N	2025-01-20 14:25:55.301947
104	Formation professionnelle supérieure	\N	2025-01-20 14:25:55.301947
105	Coopération universitaire internationale	\N	2025-01-20 14:25:55.301947
106	Maintien de l'ordre public	5	2025-01-20 14:25:55.30279
107	Lutte contre la criminalité	5	2025-01-20 14:25:55.30279
108	Protection des personnes et des biens	5	2025-01-20 14:25:55.30279
109	Gestion de la police nationale	5	2025-01-20 14:25:55.30279
110	Coordination des services de sécurité	5	2025-01-20 14:25:55.30279
\.


--
-- Data for Name: modeles_communication; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.modeles_communication (id, service_id, type, nom, sujet, contenu, variables, date_creation) FROM stdin;
\.


--
-- Data for Name: modeles_document; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.modeles_document (id, service_id, nom, description, donnees_modele, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.notifications (id, utilisateur_id, type, titre, contenu, lu, date_creation) FROM stdin;
\.


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.permissions (id, nom, description, date_creation) FROM stdin;
8	gestion_utilisateurs	Gestion des utilisateurs du système	2025-01-18 17:43:27.731808
9	gestion_services	Gestion des services offerts	2025-01-18 17:43:27.731808
10	traitement_demandes	Traitement des demandes des utilisateurs	2025-01-18 17:43:27.731808
11	consultation_statistiques	Consultation des statistiques	2025-01-18 17:43:27.731808
12	gestion_documents	Gestion des documents	2025-01-18 17:43:27.731808
13	configuration_systeme	Configuration du système	2025-01-18 17:43:27.731808
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.roles (id, nom, niveau, description, date_creation) FROM stdin;
6	Super Administrateur	administrateur	Accès complet au système	2025-01-18 17:43:27.731142
7	Superviseur Ministériel	superviseur	Supervision au niveau ministériel	2025-01-18 17:43:27.731142
8	Agent de Service	agent	Agent traitant les demandes	2025-01-18 17:43:27.731142
9	Utilisateur Standard	utilisateur	Utilisateur normal du système	2025-01-18 17:43:27.731142
\.


--
-- Data for Name: permissions_role; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.permissions_role (role_id, permission_id, date_creation) FROM stdin;
\.


--
-- Data for Name: politiques_securite; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.politiques_securite (id, type_politique, parametres, actif, date_creation, date_modification) FROM stdin;
5	mot_de_passe	{"chiffres": true, "majuscules": true, "longueur_min": 8, "caracteres_speciaux": true}	t	2025-01-18 17:43:27.759532	2025-01-18 17:43:27.759532
6	session	{"duree_max": 3600, "tentatives_max": 3, "delai_verouillage": 300}	t	2025-01-18 17:43:27.759532	2025-01-18 17:43:27.759532
7	authentification	{"deux_facteurs": false, "delai_expiration": 90}	t	2025-01-18 17:43:27.759532	2025-01-18 17:43:27.759532
\.


--
-- Data for Name: regions_departement; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.regions_departement (id, departement_id, region_id, adresse, telephone, email, date_creation, date_modification) FROM stdin;
\.


--
-- Data for Name: roles_permissions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.roles_permissions (role_id, permission_id, date_creation) FROM stdin;
\.


--
-- Data for Name: services_ministere; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.services_ministere (id, nom, description, ministere_id, date_creation, type, slug, route_type, external_url, category, parent_slug) FROM stdin;
1	Forces Armées Nationales	\N	1	2025-01-20 14:25:55.244331	service	forces-armees-nationales	local	\N	\N	\N
2	Gendarmerie Nationale	\N	1	2025-01-20 14:25:55.244331	service	gendarmerie-nationale	local	\N	\N	\N
3	Service National	\N	1	2025-01-20 14:25:55.244331	direct	service-national	local	\N	\N	\N
4	Anciens Combattants	\N	1	2025-01-20 14:25:55.244331	direct	anciens-combattants	local	\N	\N	\N
5	Services Consulaires	\N	6	2025-01-20 14:25:55.261944	service	services-consulaires	local	\N	\N	\N
6	Coopération Internationale	\N	6	2025-01-20 14:25:55.261944	direct	cooperation-internationale	local	\N	\N	\N
7	Diaspora	\N	6	2025-01-20 14:25:55.261944	direct	diaspora	local	\N	\N	\N
8	Relations Bilatérales	\N	6	2025-01-20 14:25:55.261944	direct	relations-bilaterales	local	\N	\N	\N
9	Tribunaux et Cours	\N	10	2025-01-20 14:25:55.274733	service	tribunaux-cours	local	\N	\N	\N
10	Droits Humains	\N	10	2025-01-20 14:25:55.274733	direct	droits-humains	local	\N	\N	\N
11	Services Pénitentiaires	\N	10	2025-01-20 14:25:55.274733	service	services-penitentiaires	local	\N	\N	\N
12	Aide Juridictionnelle	\N	10	2025-01-20 14:25:55.274733	direct	aide-juridictionnelle	local	\N	\N	\N
13	Budget et Trésor Public	\N	4	2025-01-20 14:25:55.286584	service	budget-tresor	local	\N	\N	\N
14	Impôts et Taxes	\N	4	2025-01-20 14:25:55.286584	service	impots-taxes	local	\N	\N	\N
15	Douanes	\N	4	2025-01-20 14:25:55.286584	service	douanes	local	\N	\N	\N
16	Marchés Publics	\N	4	2025-01-20 14:25:55.286584	direct	marches-publics	local	\N	\N	\N
17	Services Numériques	\N	12	2025-01-20 14:25:55.287829	service	services-numeriques	local	\N	\N	\N
18	La Poste	\N	12	2025-01-20 14:25:55.287829	direct	poste	local	\N	\N	\N
19	Télécommunications	\N	12	2025-01-20 14:25:55.287829	direct	telecommunications	local	\N	\N	\N
20	E-gouvernement	\N	12	2025-01-20 14:25:55.287829	direct	e-gouvernement	local	\N	\N	\N
21	Enseignement Primaire	\N	16	2025-01-20 14:25:55.28878	service	enseignement-primaire	local	\N	\N	\N
22	Enseignement Secondaire	\N	16	2025-01-20 14:25:55.28878	service	enseignement-secondaire	local	\N	\N	\N
23	Alphabétisation	\N	16	2025-01-20 14:25:55.28878	direct	alphabetisation	local	\N	\N	\N
24	Langues Nationales	\N	16	2025-01-20 14:25:55.28878	direct	langues-nationales	local	\N	\N	\N
25	Production Agricole	\N	3	2025-01-20 14:25:55.289682	service	production-agricole	local	\N	\N	\N
26	Élevage	\N	3	2025-01-20 14:25:55.289682	service	elevage	local	\N	\N	\N
27	Pêche	\N	3	2025-01-20 14:25:55.289682	direct	peche	local	\N	\N	\N
28	Recherche Agricole	\N	3	2025-01-20 14:25:55.289682	direct	recherche-agricole	local	\N	\N	\N
29	Hôpitaux et Cliniques	\N	11	2025-01-20 14:25:55.290673	service	hopitaux-cliniques	local	\N	\N	\N
30	Prévention	\N	11	2025-01-20 14:25:55.290673	direct	prevention	local	\N	\N	\N
31	Hygiène Publique	\N	11	2025-01-20 14:25:55.290673	direct	hygiene-publique	local	\N	\N	\N
32	Formation Médicale	\N	11	2025-01-20 14:25:55.290673	direct	formation-medicale	local	\N	\N	\N
37	Concours de la fonction publique	\N	7	2025-01-20 14:25:55.292544	service	concours	local	\N	citoyens	administration
38	Gestion des carrières	\N	7	2025-01-20 14:25:55.292544	service	carrieres	local	\N	citoyens	administration
39	Formation continue	\N	7	2025-01-20 14:25:55.292544	service	formation-continue	local	\N	citoyens	education
40	Retraite des fonctionnaires	\N	7	2025-01-20 14:25:55.292544	service	retraite	local	\N	citoyens	social
41	Médias publics	\N	8	2025-01-20 14:25:55.293347	service	medias-publics	local	\N	citoyens	information
42	Accréditation presse	\N	8	2025-01-20 14:25:55.293347	service	accreditation	local	\N	citoyens	information
43	Communication gouvernementale	\N	8	2025-01-20 14:25:55.293347	service	communication-gouvernementale	info	\N	citoyens	information
44	Licences de diffusion	\N	8	2025-01-20 14:25:55.293347	service	licences	local	\N	entreprises	medias
45	Aide d'urgence	\N	9	2025-01-20 14:25:55.294077	service	aide-urgence	local	\N	citoyens	social
46	Assistance aux déplacés	\N	9	2025-01-20 14:25:55.294077	service	assistance-deplaces	local	\N	citoyens	social
47	Coordination ONG	\N	9	2025-01-20 14:25:55.294077	service	coordination-ong	local	\N	international	cooperation
48	Alerte catastrophes	\N	9	2025-01-20 14:25:55.294077	service	alerte-catastrophes	local	\N	securite	urgences
49	Création d'entreprise	\N	13	2025-01-20 14:25:55.294771	service	creation-entreprise	local	\N	entreprises	commerce
50	Normes et certification	\N	13	2025-01-20 14:25:55.294771	service	normes-certification	local	\N	entreprises	industrie
51	Appui aux PME	\N	13	2025-01-20 14:25:55.294771	service	appui-pme	local	\N	entreprises	commerce
52	Investissements industriels	\N	13	2025-01-20 14:25:55.294771	service	investissements	local	\N	entreprises	industrie
53	Permis de construire	\N	14	2025-01-20 14:25:55.295691	service	permis-construire	local	\N	citoyens	urbanisme
54	Marchés publics infrastructure	\N	14	2025-01-20 14:25:55.295691	service	marches-infrastructure	local	\N	entreprises	construction
55	Signalement routier	\N	14	2025-01-20 14:25:55.295691	service	signalement-routier	local	\N	citoyens	transport
56	Urbanisme et habitat	\N	14	2025-01-20 14:25:55.295691	service	urbanisme-habitat	local	\N	citoyens	urbanisme
57	Raccordement électrique	\N	15	2025-01-20 14:25:55.296401	service	raccordement	local	\N	citoyens	energie-public
58	Permis miniers	\N	15	2025-01-20 14:25:55.296401	service	permis-miniers	local	\N	entreprises	mines
59	Énergies renouvelables	\N	15	2025-01-20 14:25:55.296401	service	energies-renouvelables	local	\N	entreprises	energie-entreprises
60	Contrôle minier	\N	15	2025-01-20 14:25:55.296401	service	controle-minier	local	\N	entreprises	mines
61	Protection environnementale	\N	\N	2025-01-20 14:25:55.297263	service	protection-environnementale	local	\N	citoyens	environnement
62	Permis environnementaux	\N	\N	2025-01-20 14:25:55.297263	service	permis-environnementaux	local	\N	entreprises	environnement
63	Changement climatique	\N	\N	2025-01-20 14:25:55.297263	service	changement-climatique	info	\N	citoyens	environnement
64	Biodiversité	\N	\N	2025-01-20 14:25:55.297263	service	biodiversite	info	\N	citoyens	environnement
65	Associations sportives	\N	\N	2025-01-20 14:25:55.297825	service	associations-sportives	local	\N	citoyens	sport
66	Équipements sportifs	\N	\N	2025-01-20 14:25:55.297825	service	equipements-sportifs	local	\N	citoyens	sport
67	Compétitions nationales	\N	\N	2025-01-20 14:25:55.297825	service	competitions-nationales	info	\N	citoyens	sport
34	Collectivités Locales	\N	2	2025-01-20 14:25:55.291555	service	collectivites-locales	local	\N	citoyens	administration
36	Protection Civile	\N	2	2025-01-20 14:25:55.291555	service	protection-civile	local	\N	securite	protection
68	Sport scolaire	\N	\N	2025-01-20 14:25:55.297825	service	sport-scolaire	info	\N	citoyens	education
69	Patrimoine culturel	\N	\N	2025-01-20 14:25:55.298647	service	patrimoine-culturel	local	\N	citoyens	culture
70	Événements culturels	\N	\N	2025-01-20 14:25:55.298647	service	evenements-culturels	info	\N	citoyens	culture
71	Industries culturelles	\N	\N	2025-01-20 14:25:55.298647	service	industries-culturelles	local	\N	entreprises	culture
72	Formation artistique	\N	\N	2025-01-20 14:25:55.298647	service	formation-artistique	local	\N	citoyens	education
73	Permis de construire	\N	\N	2025-01-20 14:25:55.300972	service	permis-construire	local	\N	citoyens	urbanisme
74	Titres fonciers	\N	\N	2025-01-20 14:25:55.300972	service	titres-fonciers	local	\N	citoyens	urbanisme
75	Aménagement urbain	\N	\N	2025-01-20 14:25:55.300972	service	amenagement-urbain	local	\N	entreprises	construction
76	Logement social	\N	\N	2025-01-20 14:25:55.300972	service	logement-social	local	\N	citoyens	urbanisme
77	Licences commerciales	\N	\N	2025-01-20 14:25:55.30163	service	licences-commerciales	local	\N	entreprises	commerce
78	Protection consommateur	\N	\N	2025-01-20 14:25:55.30163	service	protection-consommateur	local	\N	citoyens	commerce
79	Commerce international	\N	\N	2025-01-20 14:25:55.30163	service	commerce-international	local	\N	entreprises	commerce-international
80	Contrôle des prix	\N	\N	2025-01-20 14:25:55.30163	service	controle-prix	info	\N	citoyens	commerce
81	Inscriptions universitaires	\N	\N	2025-01-20 14:25:55.30245	service	inscriptions-universitaires	local	\N	citoyens	education
82	Bourses d'études	\N	\N	2025-01-20 14:25:55.30245	service	bourses-etudes	local	\N	citoyens	education
83	Recherche scientifique	\N	\N	2025-01-20 14:25:55.30245	service	recherche-scientifique	local	\N	citoyens	education
84	Équivalences diplômes	\N	\N	2025-01-20 14:25:55.30245	service	equivalences-diplomes	local	\N	citoyens	education
85	Police Nationale	\N	5	2025-01-20 14:25:55.303104	service	police-nationale	local	\N	securite	police
86	Sécurité Publique	\N	5	2025-01-20 14:25:55.303104	service	securite-publique	local	\N	securite	protection
87	Police des Frontières	\N	5	2025-01-20 14:25:55.303104	service	police-frontieres	local	\N	securite	police
88	Services d'Urgence	\N	5	2025-01-20 14:25:55.303104	service	services-urgence	local	\N	securite	urgences
33	Services Territoriaux	\N	2	2025-01-20 14:25:55.291555	service	services-territoriaux	local	\N	citoyens	administration
35	État Civil	\N	2	2025-01-20 14:25:55.291555	service	etat-civil	local	\N	citoyens	administration
\.


--
-- Data for Name: sessions_utilisateur; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sessions_utilisateur (id, utilisateur_id, jeton_session, adresse_ip, agent_utilisateur, date_derniere_activite, date_expiration, date_creation) FROM stdin;
\.


--
-- Data for Name: tentatives_connexion; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.tentatives_connexion (id, utilisateur_id, adresse_ip, reussie, date_tentative) FROM stdin;
\.


--
-- Data for Name: utilisateurs_roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.utilisateurs_roles (utilisateur_id, role_id, date_creation) FROM stdin;
\.


--
-- Name: actions_flux_travail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.actions_flux_travail_id_seq', 1, false);


--
-- Name: agents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.agents_id_seq', 1, false);


--
-- Name: communes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.communes_id_seq', 15, true);


--
-- Name: conditions_flux_travail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.conditions_flux_travail_id_seq', 1, false);


--
-- Name: demandes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.demandes_id_seq', 1, false);


--
-- Name: departements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.departements_id_seq', 1, false);


--
-- Name: documents_demande_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.documents_demande_id_seq', 1, false);


--
-- Name: documents_utilisateur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.documents_utilisateur_id_seq', 1, false);


--
-- Name: etapes_flux_travail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.etapes_flux_travail_id_seq', 1, false);


--
-- Name: etats_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.etats_service_id_seq', 1, false);


--
-- Name: flux_travail_demande_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flux_travail_demande_id_seq', 1, false);


--
-- Name: historique_etapes_flux_travail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.historique_etapes_flux_travail_id_seq', 1, false);


--
-- Name: historique_statut_demande_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.historique_statut_demande_id_seq', 1, false);


--
-- Name: journaux_acces_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journaux_acces_service_id_seq', 1, false);


--
-- Name: journaux_activite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journaux_activite_id_seq', 1, false);


--
-- Name: journaux_erreur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journaux_erreur_id_seq', 1, false);


--
-- Name: journaux_securite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journaux_securite_id_seq', 1, false);


--
-- Name: limites_requetes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.limites_requetes_id_seq', 1, false);


--
-- Name: ministeres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ministeres_id_seq', 16, true);


--
-- Name: missions_ministere_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.missions_ministere_id_seq', 110, true);


--
-- Name: modeles_communication_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.modeles_communication_id_seq', 1, false);


--
-- Name: modeles_document_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.modeles_document_id_seq', 1, false);


--
-- Name: modeles_flux_travail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.modeles_flux_travail_id_seq', 1, false);


--
-- Name: notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.notifications_id_seq', 1, false);


--
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.permissions_id_seq', 13, true);


--
-- Name: politiques_securite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.politiques_securite_id_seq', 7, true);


--
-- Name: provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.provinces_id_seq', 13, true);


--
-- Name: regions_departement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.regions_departement_id_seq', 1, false);


--
-- Name: regions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.regions_id_seq', 27, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.roles_id_seq', 9, true);


--
-- Name: services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.services_id_seq', 1, false);


--
-- Name: services_ministere_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.services_ministere_id_seq', 88, true);


--
-- Name: sessions_utilisateur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_utilisateur_id_seq', 1, false);


--
-- Name: tentatives_connexion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tentatives_connexion_id_seq', 1, false);


--
-- Name: types_document_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.types_document_id_seq', 9, true);


--
-- Name: utilisateurs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.utilisateurs_id_seq', 7, true);


--
-- PostgreSQL database dump complete
--

