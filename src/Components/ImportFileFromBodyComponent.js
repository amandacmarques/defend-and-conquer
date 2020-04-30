import React from 'react'

const ImportFileFromBodyComponent = () => {
  let fileReader;

  const supportedColors = ['green', 'red', 'blue', 'peachpuff', 'brown'];

  const handleFileRead = () => {
    const content = fileReader.result;
    createColorArrayFromFile();
  };

  const createColorArrayFromFile = () => {
    // try {
      const content = fileReader.result;
      let con = content.split(' ').join('');
      let arr = con.split(',');
      let clean = new Array(10);
      for (let i = 0; i < 10; i++) {
        let inner = new Array(10);
        for (let j = 0; j < 10; j++) {
          console.log(arr[i+j*10]);
          if (supportedColors.includes(arr[i+j*10])) {
            inner[j] = arr[i+j*10];
          } else {
            throw "Not supported color";
          }
        }
        clean[i] = inner;
      }
      this.props.changeImage(clean);
    // } catch (err) {
    //   alert("Oops! Something went wrong with reading your file! Check your colors and try again!");
    // }
  }


  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div className='upload-expense'>
      <input type='file'
             id='file'
             className='input-file'
             accept='.csv'
             onChange={e => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
}

export default ImportFileFromBodyComponent;
