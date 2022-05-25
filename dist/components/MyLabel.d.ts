/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
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
    /**
     * What background color to use
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
