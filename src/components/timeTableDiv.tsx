import { Link } from 'react-router-dom';
import '../App.css';
import React, { useState ,useRef} from 'react';

export default function TimeTableDiv() {
    const [showDiv, setShowDiv] = useState(false);
    const [divTop, setDivTop] = useState(0); // 수정 탭의 위치를 설정하는 상태
    const [divLeft, setDivLeft] = useState(0); // 수정 탭의 왼쪽 위치를 설정하는 상태
    const [divHeight, setDivHeight] = useState(79); // 수정 탭의 높이 설정
    const reviseRefs = useRef([]); // 여러 이미지에 대한 ref를 저장하는 배열

    const handleClick = (index) => {
        const rect = reviseRefs.current[index].getBoundingClientRect();
        // 이미지 위치에서 수정 탭 높이와 왼쪽 위치를 설정
        setDivTop(rect.top + window.scrollY -88);
        setDivLeft(rect.left + window.scrollX + 12);
        setShowDiv(!showDiv); // 수정 탭 표시
    };
    return  (
        <div
            style={{
                width: '310px',
                margin: '0 auto',
                overflow: 'auto',
            }}
        >
            {/*수정 탭*/ }
            {showDiv&&(
             <div  >
            <div
              style={{
                position: 'absolute',
                left: `${divLeft}px`,
                top: `${divTop}px`,
                width: '191px',
                height: `${divHeight}px`,
                backgroundColor: '#B0B0B0',
                borderBottomRightRadius: '10px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
                marginBottom: '9px',
                zIndex: '10',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "79px",
                  backgroundColor: "white",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1px",
                    paddingTop: "4px",
                  }}
                >
                  시작
                  <input
                    placeholder="00 : 00"
                    type="datetime"
                    style={{
                      width: "55px",
                      marginTop: "1px",
                      marginBottom: "3px",
                      borderRadius: "4px",
                      marginLeft: "15px",
                      height: "7px",
                      paddingLeft: "11px",
                      paddingTop: "9px",
                      border: "1px solid #4470F3",
                    }}
                  ></input>
                </div>
                <hr style={{ marginBottom: "0px", marginTop: "2px",backgroundColor:'#CACACA',border:'none',height:'0.5px',width:'155px' }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1px",
                    paddingTop: "3px",
                  }}
                >
                  종료
                  <input
                    placeholder="00 : 00"
                    type="datetime"
                    style={{
                      width: "55px",
                      marginTop: "2px",
                      marginBottom: "3px",
                      borderRadius: "4px",
                      marginLeft: "15px",
                      height: "7px",
                      paddingLeft: "11px",
                      paddingTop: "9px",
                      border: "1px solid #4470F3",
                    
                    }}
                  ></input>
                </div>
              </div>
              <img src="../img/btn/nextSmall.png" style={{ width: '11px',height:'15px', cursor: 'pointer',paddingTop:'30px',paddingBottom:'30px',paddingLeft:'10px',paddingRight:'10px' }} />
            </div>
          </div>
            )}
            {/*수정 탭*/ }

            {/*세빈이 작업 공간*/}
            {Array.from({ length: 3

             }).map((_, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div
                    style={{
                        color: '#0D2259',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '12px',
                        marginRight: '15px',
                    }}
                >
                    <span style={{ lineHeight: '1' }}>00:00</span>
                    <span>-</span>
                    <span style={{ lineHeight: '1' }}>07:00</span>
                </div>
                <span
                    style={{
                        width: '280px',
                        height: '55px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        border: '1px solid #A4BCFD',
                        borderLeft: 'none',
                        paddingRight: '10px',
                    }}
                >
                    <span
                        style={{
                            width: '10px',
                            height: '55px',
                            backgroundColor: '#CACACA',
                        }}
                    ></span>
                    <div
                        style={{
                            width: '200px',
                            textAlign: 'left',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '17px',
                                color: '#000',
                            }}
                        >
                            수면시간
                        </span>
                    </div>
                    <img  ref={el => reviseRefs.current[index] = el} src="../img/btn/edit_disabled.png" onClick={() => handleClick(index)} style={{ width: '22px', cursor: 'pointer' }} 
                    />
                </span>
            </div>
            ))}
        </div>
    );
}
