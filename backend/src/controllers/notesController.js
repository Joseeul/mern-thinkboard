export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetch the notes");
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "Notes created successfully" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Notes update successfully" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Notes delete successfully" });
};
