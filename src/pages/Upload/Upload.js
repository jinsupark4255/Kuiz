import React, { useEffect, useRef, useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import search from "../../assets/images/search.svg";
import edit from "../../assets/images/edit.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentFileState,
  folderState,
  updatedDirectory,
  directoryState,
} from "../../recoil/atom";
import { createfolderPostAPI, myfolderAPI } from "./../../apis/API";

const Upload = () => {
  const [pdfFile, setpdfFile] = useState(null);
  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);

  const folders = useRecoilValue(updatedDirectory);
  const [folderData, setFolderData] = useRecoilState(directoryState);

  const navigate = useNavigate();

  const fileType = ["application/pdf"];

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFolderData(folders);
  }, [folders, setFolderData]);
  // directory 클릭
  const handleDirectory = (dirId) => {
    const newDirectories = folders.map((directory) => {
      if (directory.id === dirId) {
        return { ...directory, isSelected: !directory.isSelected };
      }
      return directory;
    });
    setFolderData(newDirectories);
  };

  // 검색어
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // 파일 선택
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setpdfFile(e.target.result);
          setCurrentFile(e.target.result);
          navigate("/pdf");
        };
      } else {
        setpdfFile(null);
      }
    } else {
      console.log("please select");
    }
  };

  // 디렉토리 추가
  const handleDirectoryAdd = () => {
    try {
      const res = createfolderPostAPI.post("");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  /* 파일 수정 텍스트 */
  const [fileEditText, setFileEditText] = useState();

  // 파일명 수정
  const EditFileName = (pdfId) => {};
  // (파일 클릭) 업로드 할 때는 전체 디렉토리에서 하나만 클릭 가능
  const handleFileClick = (dirId, fileId) => {
    // const newDirectories = directories.map((dir) => {
    //   const newDetails = dir.details.map((file) => {
    //     if (dir.id === dirId && file.id === fileId) {
    //       return { ...file, isSelected: true };
    //     } else {
    //       return { ...file, isSelected: false, isEdit: false };
    //     }
    //   });
    //   return { ...dir, details: newDetails };
    // });
    // setDirectories(newDirectories);
  };

  /* 파일 수정 */
  console.log(folders);

  return (
    <S.UploadWrapper>
      <S.SideBarWrapper>
        <S.SideBarHeader>
          <S.EditBtn>편집</S.EditBtn>
          <S.DeleteBtn>
            <img src={trash} alt="삭제 버튼" />
          </S.DeleteBtn>
          <S.AddBtn>
            <img src={add} alt="추가 버튼" onClick={handleDirectoryAdd} />
          </S.AddBtn>
        </S.SideBarHeader>
        <S.SectionListBox>
          {folders.map((directory, idx) => (
            <S.DirBox key={directory.folder_id}>
              <S.DirTitle isSelected={directory.isSelected}>
                <S.ToggleBtn onClick={() => handleDirectory(directory.id)}>
                  {directory.isSelected ? (
                    <img src={open} alt="열기 이미지" />
                  ) : (
                    <img src={close} alt="닫기 이미지" />
                  )}
                </S.ToggleBtn>
                <S.DirName isSelected={directory.isSelected}>
                  {directory.folder_name}
                </S.DirName>
              </S.DirTitle>
              {directory.isSelected && (
                <S.DirInner>
                  {directory.pdfDtos?.map((pdf) => (
                    <S.FileItemWrapper
                      key={pdf.pdf_id}
                      onClick={() => handleFileClick(directory.id, pdf.id)}
                      isSelected={pdf.isSelected}
                    >
                      {pdf.isEdit ? (
                        <S.FileInput
                          value={fileEditText}
                          onChange={(e) => setFileEditText(e.target.value)}
                        />
                      ) : (
                        <S.FileName>{pdf.name}</S.FileName>
                      )}
                      <S.FileEditBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          EditFileName(directory.id, pdf.id);
                        }}
                      >
                        {pdf.isEdit ? (
                          <span>확인</span>
                        ) : (
                          <img src={edit} alt="수정 이미지" />
                        )}
                      </S.FileEditBtn>
                    </S.FileItemWrapper>
                  ))}
                </S.DirInner>
              )}
            </S.DirBox>
          ))}
        </S.SectionListBox>
      </S.SideBarWrapper>
      <S.LectureUploadWrapper>
        <S.LectureWrapper>
          <S.UploadName>강의명</S.UploadName>
          <S.UploadSearch>
            <S.UploadTopSearch>
              <img src={search} alt="검색 이미지" />
              <S.SearchInput
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="강의명을 입력하세요"
              />
            </S.UploadTopSearch>
            <S.SearchList>
              <S.SearchItem>마지막</S.SearchItem>
              <S.SearchItem>마지막123213</S.SearchItem>
              <S.SearchItem>마지막</S.SearchItem>
            </S.SearchList>
          </S.UploadSearch>
        </S.LectureWrapper>
        <S.FileUploadWrapper>
          <S.UploadBox>
            <input
              type="file"
              className="hiddenInput"
              onChange={handleChange}
            />
            <S.UploadCancelBtn>
              <img src={cancel} alt="취소 버튼" />
            </S.UploadCancelBtn>
          </S.UploadBox>
        </S.FileUploadWrapper>
      </S.LectureUploadWrapper>
    </S.UploadWrapper>
  );
};

export default Upload;
