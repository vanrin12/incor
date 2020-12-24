export function isNumberKey(e) {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    if (charCode !== 46) {
      e.preventDefault();
      return false;
    }
  }
  return true;
}

export function isOnPasteNumber(e) {
  const pastedData = e.clipboardData.getData('text/plain');
  const regex = /[0-9]/;
  if (!regex.test(pastedData)) {
    e.preventDefault();
    return false;
  }

  return true;
}

export function getFormatBlock(str, $1, $2, $3, $unit) {
  const data = `${str.slice(0, $1)}${$unit}${str.slice(
    $1,
    $2
  )}${$unit}${str.slice($2, $3)}`;
  return data;
}

export const truncateString = (str: string, num: any) => {
  if (str.length <= num || num === 0) {
    return str;
  }
  if (str.split(' ').slice(0, num).length >= num) {
    return `${str.split(' ').slice(0, num).join(' ')}...`;
  }
  return str;
};

export const removeVietnameseTones = (str) => {
  let string = '';
  string = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  string = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  string = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  string = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  string = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  string = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  string = str.replace(/đ/g, 'd');
  string = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  string = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  string = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  string = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  string = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  string = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  string = str.replace(/Đ/g, 'D');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  string = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  string = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  string = str.replace(/ + /g, ' ');
  string = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  // str = str.replace(
  //   /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]||~|\$||_|`|-|{|}|\||\\/g,
  //   ' '
  // );
  return string;
};

export default {
  isNumberKey,
  isOnPasteNumber,
  getFormatBlock,
  truncateString,
  removeVietnameseTones,
};
