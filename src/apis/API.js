import axios from "axios";

/**
 * 사용자 관리
 */

// 회원가입
export const userPostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/user/signup",
  withCredentials: true,
});

// 아이디 중복 확인({userid})
export const IdCheckGetAPI = axios.create({
  baseURL: "http://localhost:8080/api/user/findId",
  withCredentials: true,
});

// 로그인
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/user/login",
  withCredentials: true,
});

// 로그아웃
export const logoutPostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/user/logout",
  withCredentials: true,
});

// 비밀번호 변경
export const userpwChangePostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/user/change-password",
  withCredentials: true,
});

/* 폴더 */

// 폴더 생성
export const createfolderPostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/folder/create",
  withCredentials: true,
});

// 폴더 변경

// 폴더 조회
export const myfolderAPI = axios.create({
  baseURL: "http://localhost:8080/api/folder/my-folders",
  withCredentials: true,
});

// 폴더 이름 변경(수정)
export const updatefoldernameAPI = axios.create({
  method: "patch",
  baseURL: "http://localhost:8080/api/folder/update-name",
  withCredentials: true,
});

/* PDF */

// PDF 업로드
export const uploadpdfAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/pdf/upload",
  withCredentials: true,
});

// PDF 삭제
export const deletepdfAPI = axios.create({
  method: "delete",
  baseURL: "http://localhost:8080/api/pdf/delete",
  withCredentials: true,
});

// 사용자가 업로드한 pdf 조회
export const mypdfAPI = axios.create({
  baseURL: "http://localhost:8080/api/pdf/my-pdfs",
  withCredentials: true,
});

// pdf 이름 변경
export const updatepdfAPI = axios.create({
  method: "patch",
  baseURL: "http://localhost:8080/api/pdf/update-name",
  withCredentials: true,
});

// pdf url 얻기(주소뒤에 pdfid 붙여서 보내기)
export const pdfurlAPI = axios.create({
  baseURL: "http://localhost:8080/api/pdf/getpdfurl",
  withCredentials: true,
});

// // directory 배열
// const initialDirectories = [
//   {
//     folder_name: "디렉토리명",
//     isSelected: false,
//     isEdit: false,
//     folder_id: 1,

//     pdfDtos: [
//       {
//         pdf_id: 1,
//         file_name: "PDF 파일명 1",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 2,
//         file_name: "PDF 파일명 2",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 3,
//         file_name: "PDF 파일명 3",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 4,
//         file_name: "PDF 파일명 4",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 5,
//         file_name: "PDF 파일명 5",
//         isSelected: false,
//         isEdit: false,
//       },
//     ],
//   },
//   {
//     folder_name: "디렉토리명2",
//     isSelected: false,
//     isEdit: false,
//     folder_id: 2,
//     pdfDtos: [
//       {
//         pdf_id: 1,
//         file_name: "PDF 파일명 1",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 2,
//         file_name: "PDF 파일명 2",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 3,
//         file_name: "PDF 파일명 3",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 4,
//         file_name: "PDF 파일명 4",
//         isSelected: false,
//         isEdit: false,
//       },
//       {
//         pdf_id: 5,
//         file_name: "PDF 파일명 5",
//         isSelected: false,
//         isEdit: false,
//       },
//     ],
//   },
// ];
