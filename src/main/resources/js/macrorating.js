import getMacroData from "./getMacroData";
import macroPainter from "./macroPainter";
import getElements from "./getElements";
import addOnClickListeners from "./addOnClickListeners"

AJS.toInit(async function () {
    const macroData = await getMacroData();
    const elements = getElements();
    macroPainter(macroData, elements);
    addOnClickListeners(macroData, elements);
});

