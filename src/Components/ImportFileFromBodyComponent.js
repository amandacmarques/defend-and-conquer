import React from 'react'

const ImportFileFromBodyComponent = () => {
  let fileReader;

  const supportedColors = ['green'];

  const handleFileRead = () => {
    const content = fileReader.result;
    console.log(content);
    createColorArrayFromFile();
  };

  const createColorArrayFromFile = () => {
    const content = fileReader.result;
    let con = content.split(' ').join('');
    let arr = con.split(',');
    let cleaned = [];
    for (let i = 0; i < 10; i++) {
      let innerArr = [];
      for (let j = 0; j < 10; j++) {
        innerArr[i] = cleaned[(i*10)+j];
      }
      cleaned[i] = innerArr;
    }
    console.log(cleaned);
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
