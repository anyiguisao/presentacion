
function previewImage(inputNumber) {
  const fileInput = document.getElementById(`fileInput${inputNumber}`);
  const imagePreview = document.getElementById(`imagePreview${inputNumber}`);
  const file = fileInput.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "#";
  }
}
