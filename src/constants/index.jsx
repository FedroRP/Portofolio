import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import ds from "../assets/sertifikat/datascince.png";
import ic from "../assets/sertifikat/iconic.png";
import kn from "../assets/sertifikat/KNIME.png";
import st from "../assets/sertifikat/TSA.png";
import ts from "../assets/sertifikat/Stupen.png";

import fun from "../assets/project/Dashboard 2.png";
import ico from "../assets/project/Storytelling.png";
import jav from "../assets/project/java.png";
import app from "../assets/project/Dashboard 1.png";
import fuelapp from "../assets/project/Dashboard 3.png";
import kas from "../assets/project/result.png";

export const navItems = [
  { label: "Home", href: "#Home" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Certification", href: "#sertifikat" },
];

export const certifications = [
  {
    image: ds,
    title: "Associate Data Science",
    provider: "BNSP",
    description: "BNSP Data Science certification: analysis, coding, and practical algorithmic solutions.",
    link: "https://drive.google.com/file/d/1kxhIQ6BnoxCbqLfLnC_Rf4QiKax7H9In/view?usp=drive_link",
  },
  {
    image: ts,
    title: "Sertifikat Studi Independen Bersertifikat", 
    provider: "MSIB Angkatan 6",
    description: "Completed Batch 6 Independent Study, GreatEdu Greenceleration Data Science Bootcamp.",
    link: "https://drive.google.com/file/d/1WmjxDgNcJ80lgYfKGyNZvawUm999NUQu/view?usp=drive_link",
  },
  {
    image: kn,
    title: "KNIME Advanced Analytics",
    provider: "KNIME Academy",
    description: "Learning in-depth data analytics using KNIME software in a practical way.",
    link: "https://drive.google.com/file/d/1NLMBLN6YiPwxB5plcRscDZ56uqVg67PE/view?usp=drive_link",
  },
  {
    image: ic,
    title: "ICONIC AI Certification",
    provider: "Universitas Siliwangi",
    description: "This certificate was obtained from the Data Science competition, testing analytical skills.",
    link: "https://drive.google.com/file/d/1vKU8fuRs8419-wuYF1-GxjkjZirRb0mV/view?usp=drive_link",
  },
  {
    image: st,
    title: "Data Science and AI Solutions for Real-World Issues",
    provider: "Digital Talent Scholarship",
    description: "Pelatihan Data Science yang diselenggarakan oleh Kementerian Komunikasi dan Informatika, mencakup pemodelan, analisis, dan visualisasi data untuk menyelesaikan isu-isu dunia nyata.",
    link: "https://drive.google.com/file/d/15pLqT0kf7VFHC_-S78N_1YpCBZndzxYp/view?usp=drive_link",
  },

];

export const internships = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const projects = [
  {
    title: "Data Voyagers",
    description:
      "Pricing prediction using ARIMA, MSIB batch 6 project with Startup Campus.",
    link: "https://public.tableau.com/app/profile/tim.13b/viz/DataVoyagers/Dashboard2",
    image: fun
  },
  {
    title: "Chicken population distribution map",
    description:
      "Presenting data on the chicken population in Tasikmalaya City.",
    link: "https://public.tableau.com/app/profile/tim.13b/viz/PersebaranPopulasiAyamDiKotaTasikmalaya/Storytelling",
    image: ico
  },
  {
    title: "Java Quake",
    description:
      "JavaQuake: Classification of Java earthquakes via clustering, KOMINFO project.",
    link: "https://maetalascientist-javaquake.streamlit.app/",
    image: jav
  },
  {
    title: "Graph showing poverty levels in Tasikmalaya City",
    description:
      "Presenting data on poverty levels in Tasikmalaya City",
    link: "https://public.tableau.com/app/profile/tim.13b/viz/TIngkatKemiskinanKotaTasikmalaya/Dashboard1",
    image: app
  },
  {
    title: "Tasikmalaya City Human Development Index (HDI) Visualization",
    description:
      "Presenting Tasikmalaya City's Human Development Index (HDI)",
    link: "https://public.tableau.com/app/profile/tim.13b/viz/IndeksPembangunanManusiaKotaTasikmalaya/Dashboard1",
    image: fuelapp
  },
  {
    title: "Marketing Strategy Optimization",
    description:
      "Visualizing product prediction and recommendation with machine learning.",
    link: "https://public.tableau.com/app/profile/tim.13b/viz/VisualisasiHasil_17463298771380/Dashboard1",
    image: kas
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
