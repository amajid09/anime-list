import React from "react";

export type ThemeColours = 'Zinc' | 'Rose' | 'Blue' | 'Green' | 'Orange';

export interface ThemeColourStateParams {
    themeColour: ThemeColours;
    setThemeColour: React.Dispatch<React.SetStateAction<ThemeColours>>
}