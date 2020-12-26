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
  let string = str;
  string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  string = string.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  string = string.replace(/đ/g, 'd');
  string = string.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  string = string.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  string = string.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  string = string.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  string = string.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  string = string.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  string = string.replace(/Đ/g, 'D');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  string = string.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  string = string.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  string = string.replace(/ + /g, ' ');
  string = string.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  string = string.replace(
    /!|@|%|\^|\*|\(|\)|\+|\?|\/|,|\[|\]||~|\$||_|`|-|{|}|\||\\/g,
    ''
  );
  return string;
};

export default {
  isNumberKey,
  isOnPasteNumber,
  getFormatBlock,
  truncateString,
  removeVietnameseTones,
};
