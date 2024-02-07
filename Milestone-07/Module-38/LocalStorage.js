const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const idValue = document.getElementById("storage-value");
  const id = idInput.value;
  const value = idValue.value;

  if (id && value) {
    localStorage.setItem(id, JSON.stringify(value));
  }

  const readValue = JSON.parse(id);
  console.log(id, value);

  console.log("ReD vALUE", readValue);
};
