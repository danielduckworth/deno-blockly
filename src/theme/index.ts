/**
 * @license
 * Copyright 2022 ICILS
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Google blockly theme using Vuetify.
 */

import Blockly from "blockly/core";
// import "vuetify/styles";

export default Blockly.Theme.defineTheme("icils", {
  base: Blockly.Themes.Classic,
  name: "ICILS 2077",
  // blockStyles: {
  //   colour_blocks: {
  //     colourPrimary: "#a5745b",
  //     colourSecondary: "#dbc7bd",
  //     colourTertiary: "#845d49",
  //   },
  //   list_blocks: {
  //     colourPrimary: "#745ba5",
  //     colourSecondary: "#c7bddb",
  //     colourTertiary: "#5d4984",
  //   },
  //   logic_blocks: {
  //     colourPrimary: "#5b80a5",
  //     colourSecondary: "#bdccdb",
  //     colourTertiary: "#496684",
  //   },
  //   loop_blocks: {
  //     colourPrimary: "#5ba55b",
  //     colourSecondary: "#bddbbd",
  //     colourTertiary: "#498449",
  //   },
  //   math_blocks: {
  //     colourPrimary: "#5b67a5",
  //     colourSecondary: "#bdc2db",
  //     colourTertiary: "#495284",
  //   },
  //   procedure_blocks: {
  //     colourPrimary: "#995ba5",
  //     colourSecondary: "#d6bddb",
  //     colourTertiary: "#7a4984",
  //   },
  //   text_blocks: {
  //     colourPrimary: "#5ba58c",
  //     colourSecondary: "#bddbd1",
  //     colourTertiary: "#498470",
  //   },
  //   variable_blocks: {
  //     colourPrimary: "#a55b99",
  //     colourSecondary: "#dbbdd6",
  //     colourTertiary: "#84497a",
  //   },
  //   variable_dynamic_blocks: {
  //     colourPrimary: "#a55b99",
  //     colourSecondary: "#dbbdd6",
  //     colourTertiary: "#84497a",
  //   },
  //   hat_blocks: {
  //     colourPrimary: "#a55b99",
  //     colourSecondary: "#dbbdd6",
  //     colourTertiary: "#84497a",
  //     hat: "cap",
  //   },
  // },
  // categoryStyles: {
  //   colour_category: {
  //     colour: "#a5745b",
  //   },
  //   list_category: {
  //     colour: "#745ba5",
  //   },
  //   logic_category: {
  //     colour: "#5b80a5",
  //   },
  //   loop_category: {
  //     colour: "#5ba55b",
  //   },
  //   math_category: {
  //     colour: "#5b67a5",
  //   },
  //   procedure_category: {
  //     colour: "#995ba5",
  //   },
  //   text_category: {
  //     colour: "#5ba58c",
  //   },
  //   variable_category: {
  //     colour: "#a55b99",
  //   },
  //   variable_dynamic_category: {
  //     colour: "#a55b99",
  //   },
  // },
  componentStyles: {
    workspaceBackgroundColour: "#FEFBFF", // Background
    toolboxBackgroundColour: "#DCE1FF", // Primary container
    toolboxForegroundColour: "#071748", // On primary container
    flyoutBackgroundColour: "#E1E1F2", // Secondary container
    flyoutForegroundColour: "#191B26", // On secondary container
    flyoutOpacity: 0.8, // Same as classic
    scrollbarColour: "rgba(198, 197, 208, 0.7)", // Primary-lighten-5
    insertionMarkerColour: "#2B3042", // Secondary 20
    insertionMarkerOpacity: 0.3, // ?
    markerColour: "#906C88", // ? Tertiary 50
    cursorColour: "#EFEFFF", // Secondary 95
    selectedGlowColour: "#A36C00", // Custom accent
    selectedGlowOpacity: 0.6, //
    replacementGlowColour: "#FFB94F", // Custom accent
    replacementGlowOpacity: 0.8,
  },

  fontStyle: {
    family: "'Inter', 'Open Sans', Roboto, sans-serif",
    weight: "normal",
    size: 13, // User can zoom in and out to change the size.
  },
  // startHats: null,
});
