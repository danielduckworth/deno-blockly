// outputs.ts
import { reactive, ref } from "vue";
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import icils from "../theme/index";

export const workspaceStore = reactive({
  workspace: ref(),
  startBlocks: ref(),
});

export const optionsStore = reactive({
  toolbox: ref(),
  theme: ref(icils), // import Theme from "@/theme/index";
  collapse: false,
  comments: false,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: false,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 1,
    colour: "#888",
    snap: true,
  },
  zoom: {
    controls: true,
    wheel: false,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
  renderer: "geras",
});

export const outputsStore = reactive({
  // Declare the type for msg which is an empty list for strings to be pushed into
  msg: [] as string[],
  code: "" as string,
  activeTab: ref("tab-1"),
  snackbar: false,
  snackbarMsg: "" as string,
  snackbarTimeout: 2500 as number,
  snackbarColor: "green" as string,
});

export function saveJSON() {
  var workspace = Blockly.getMainWorkspace();
  var state = Blockly.serialization.workspaces.save(workspace);
  var json = JSON.stringify(state);
  localStorage.setItem("blocklyTerminal", json);
  outputsStore.snackbarMsg = "👍 Workspace saved.";
  outputsStore.snackbar = true;
  console.log("Workspace state saved to localstorage as JSON: " + json);
}

export function loadJSON() {
  var workspace = Blockly.getMainWorkspace();
  var json = localStorage.getItem("blocklyTerminal");
  if (json) {
    Blockly.serialization.workspaces.load(JSON.parse(json), workspace);
    outputsStore.snackbarMsg = "👍 Saved workspace restored.";
  } else {
    outputsStore.snackbarMsg =
      "Saved workspace not found. Loading default workspace.";
    outputsStore.snackbarColor = "warning";
    initWorkspaceState();
  }
  outputsStore.snackbar = true;
}

export function initWorkspaceState() {
  var startBlocks = workspaceStore.startBlocks;
  var workspace = Blockly.getMainWorkspace();
  Blockly.serialization.workspaces.load(startBlocks, workspace);
}

export function generateCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and store the code string in genCode.
  javascriptGenerator.addReservedWords("code");
  outputsStore.code = javascriptGenerator.workspaceToCode(workspace);
  outputsStore.activeTab = "tab-3";
  console.log("Code generated with genCode", outputsStore.code);
}

export function showCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and display it.
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
}

export function runCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and run it.
  var code = javascriptGenerator.workspaceToCode(workspace);
  // Redirect window.alert to a function that populates alertMessage with output.
  window.alert = function (message: string) {
    outputsStore.msg.push(message);
    console.log("Print output:", message);
  };
  try {
    eval(code);
  } catch (e) {
    window.alert(e);
    // If there is no error, then run the code in the browser and append the output msg for display in the terminal.
    if (!e) {
      console.log("No alert message, executing code.");
      var output = eval(code);
      outputsStore.msg.push(output);
      outputsStore.activeTab = "tab-2";
    }
  }
}

export function clearMSG() {
  outputsStore.msg = [];
}
