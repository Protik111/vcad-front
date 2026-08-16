export interface Campus {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
}

export const campuses: Campus[] = [
  {
    id: "canary-wharf",
    name: "Canary Wharf Campus",
    image: "/images/campus-canary-wharf.webp",
    imageAlt: "Students walking outside VCAD Canary Wharf campus",
  },
  {
    id: "borough",
    name: "Borough Campus",
    image: "/images/campus-borough.webp",
    imageAlt: "VCAD Borough campus building exterior",
  },
];
