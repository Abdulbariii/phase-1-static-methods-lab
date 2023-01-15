class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstLetter = string[0].toUpperCase();
    return string.replace(string[0], firstLetter);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\'\ ]/g, "");
  }
  static titleize(string) {
    const array = string.split(" ");
    const arrayCap = array.map((wordInput) => {
      const word = wordInput.toLowerCase();
      let desiredCase;
      if (
        word !== "the" &&
        word !== "a" &&
        word !== "an" &&
        word !== "but" &&
        word !== "of" &&
        word !== "and" &&
        word !== "for" &&
        word !== "at" &&
        word !== "by" &&
        word !== "from"
      ) {
        desiredCase = word.replace(
          word.charAt(0),
          word.charAt(0).toUpperCase()
        );
      } else {
        desiredCase = word;
      }
      return desiredCase;
    });
    let title = arrayCap.join(" ");
    title = title.replace(title.charAt(0), title.charAt(0).toUpperCase());
    return title;
  }
}
