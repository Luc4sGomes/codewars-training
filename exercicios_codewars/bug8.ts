export function areYouPlayingBanjo(name: string): string {
  let keepNameFormated = name.split("");
  if (keepNameFormated[0].toLowerCase() === "r") {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}
