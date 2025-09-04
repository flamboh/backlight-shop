import Image from "next/image";

export default function Logo() {
  // Assumes you have a logo.jpg in your public/ directory
  // You can adjust width/height/alt as needed
  return (
    <Image
      src="/backlight.png"
      alt="Logo"
      width={64}
      height={64}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
