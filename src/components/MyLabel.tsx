import "./mylabel.css";
// Los comentarios encima de los props son los docs que se generan en storybook
interface MyLabelProps {
  /**
   * Texto que contendrá la etiqueta span
   */
  label: string;
  /**
   * Tipo de etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si true, se debe capitalizar el texto
   */
  allCaps: boolean;
  /**
   * Color del label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * What background color to use
   */
  fontColor?: string;
}

export const MyLabel = ({ label = "No label provided", size = "normal", allCaps = false, color = "primary", fontColor }: MyLabelProps) => {
  return (
    <span style={{ color: fontColor }} className={`label ${size} text-${color} `}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
