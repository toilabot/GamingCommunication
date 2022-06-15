Line 34;
var prizes = [
  {
    text: "Hoodie J2Team", // Require
    img: "images/Ao.png", // Optional
    number: 1,
    percentage: 1 // (100%) | 0.5 // 50% | 0.01 // 1%
  }
];
Line 80;
mode : both // For display both image and text
mode : null // For display text if only text and image if having it will having no text
  Line 86
  if(data == null){
    // This for when no more prize
    Swal.fire(
      'Chương trình kết thúc',
      'Đã hết phần thưởng',
      'error'
    )
  }else{
    // This for when spin is done
    Swal.fire(
      'Đã trúng giải',
      data,
      'success'
    )
  }
