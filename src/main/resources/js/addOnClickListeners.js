import getMacroData from "./getMacroData";
import macroPainter from "./macroPainter";

export default function addOnClickListeners(macroData, elements) {
    elements.ratingSelectorStars.forEach((star, i) => {
        star.addEventListener("click", async (e) => {
            if (macroData.isVoted) {
                await fetch(`${macroData.url}/${macroData.currentUserKey}/${i + 1}`, {
                    method: "PUT",
                    headers: {"X-Atlassian-Token": "no-check"}
                });
            } else {
                await fetch(`${macroData.url}/${macroData.currentUserKey}/${i + 1}`, {
                    method: "POST",
                    headers: {"X-Atlassian-Token": "no-check"}
                });
            }
            macroData = await getMacroData();
            macroPainter(macroData, elements);
        });
    });
}
