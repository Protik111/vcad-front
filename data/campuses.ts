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
    image: "/images/campus-canary-wharf.jpg",
    imageAlt: "Students walking outside VCAD Canary Wharf campus",
  },
  {
    id: "borough",
    name: "Borough Campus",
    image: "/images/campus-borough.png",
    imageAlt: "VCAD Borough campus building exterior",
  },
  {
    id: "soho",
    name: "Soho Campus",
    image: "/images/campus-3.png",
    imageAlt: "Students walking outside VCAD Soho campus",
  },
];
