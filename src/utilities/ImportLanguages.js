import languageList from "../utilities/languageList.json";

export const ImportLanguages = async (data) => {
  try {
    const response = await data;
    // Handle the language data response here, so it returns an array of
    // objects with language name and code
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const langData = ImportLanguages(languageList).then((langs) =>
  langs.map((lang) => {
    return { code: lang.code, name: lang.name };
  })
);
