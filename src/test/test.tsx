import { Link } from 'react-router-dom';

function ListPage() {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>페이지 이름</th>
                        <th>페이지 url</th>
                        <th>페이지 완성도</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>메인페이지</td>
                        <td><Link to="/main">/main</Link></td>
                        <td>1%</td>
                    </tr>
                    <tr>
                        <td>회원가입</td>
                        <td><Link to="/register">/register</Link></td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>로그인</td>
                        <td>아직없음</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>보드게임카페</td>
                        <td><Link to="/boardCafe">/boardCafe</Link></td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>보드게임리스트</td>
                        <td><Link to="/boardGame">/boardGame</Link></td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>AI</td>
                        <td>아직없음</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>보드게임모임</td>
                        <td>아직없음</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>방탈출 카페</td>
                        <td><Link to="/escapeRoom">/escapeRoom</Link></td>
                        <td>0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default ListPage;