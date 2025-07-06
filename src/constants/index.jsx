import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import ds from "../assets/sertifikat/fit.jpg";
import ic from "../assets/sertifikat/iconic.png";
import kn from "../assets/sertifikat/ict.jpg";
import st from "../assets/sertifikat/kominfo.jpg";
import ts from "../assets/sertifikat/Stupen.jpeg";

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
    title: "Fit Competition 2024",
    provider: "Universitas Kristen Satya Wacana",
    description: "Idea to Action: Creating Sustainable Solution For Smart City.",
    link: "https://drive.google.com/file/d/1HZnH0APILRkfkwG7qOaDJicUGKi5zEjt/view?usp=sharing",
  },
  {
    image: ts,
    title: "Studi Independen", 
    provider: "MSIB Angkatan 6",
    description: "Completed Batch 6 Independent Study, Data Science & Artificial Intelligence.",
    link: "https://drive.google.com/file/d/1uaCF14Af4xpiJRwT7uH9ICe3nT3TgOh8/view?usp=sharing",
  },
  {
    image: kn,
    title: "Sertifikat ICT Project Manager",
    provider: "BNSP",
    description: "Completed ICT Projek Manager certification.",
    link: "https://drive.google.com/file/d/1HXlqv0x01wHwCDlNDC6Y5z0chty6L2oR/view?usp=sharing",
  },
  {
    image: ic,
    title: "ICONIC AI Certification",
    provider: "Universitas Siliwangi",
    description: "This certificate was obtained from the Data Science competition, testing analytical skills.",
    link: "https://drive.google.com/file/d/1Y4OQG3pIe2AjbjDSCAUpCp-mYlDXcSqr/view?usp=sharing",
  },
  {
    image: st,
    title: "Setifikat Intern",
    provider: "DISKOMINFO Tasikmalaya City",
    description: "Completed internship at DISKOMINFO Tasikmalaya City as a Data Analyst.",
    link: "https://drive.google.com/file/d/1hkPLXXNhYF2MCRU2XlEJ9AmBGWukFW85/view?usp=sharing",
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
