import { Link, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Board from "./pages/Board"
import BoardWrite from "./pages/BoardWrite"
import BoardContent from "./pages/BoardContent"
import Footer from "./pages/Footer"
import { Button } from "antd"
import Join from "./pages/Join"
import Mypage from "./pages/Mypage"
import Logout from "./pages/Logout"
import { useSelector } from "react-redux"
import ItemInsert from "./pages/ItemInsert"
import ItemList from "./pages/ItemList"
import ChangePw from "./pages/mypage/ChangePw"
import ChangeInfo from "./pages/mypage/Changeinfo"
import Chat from "./pages/Chat"
import Board1 from "./pages/Board1"


const App = () => {

	// loggedSlice에 공유된 isLogin, token 값을 가져오기
	const { isLogin, token } = useSelector((state) => state.logged);

	return (
		<div>
			<Link to="/"><Button type="dashed" size="small">홈</Button></Link>
			<Link to="/Chat"><Button type="dashed" size="small">채팅</Button></Link>
			<Link to="/board"><Button type="dashed" size="small">게시판</Button></Link>
			<Link to="/board1"><Button type="dashed" size="small">게시판1</Button></Link>
			<Link to="/ItemInsert"><Button type="dashed" size="small">물품등록</Button></Link>
			<Link to="/ItemList"><Button type="dashed" size="small">물품목록</Button></Link>

			{ !isLogin && <Link to="/join"><Button type="dashed" size="small">회원가입</Button></Link> }
			{ !isLogin && <Link to="/login"><Button type="dashed" size="small">로그인</Button></Link> }
			
			{ isLogin && <Link to="/logout"><Button type="dashed" size="small">로그아웃</Button></Link> }
			{ isLogin && <Link to="/mypage"><Button type="dashed" size="small">마이페이지</Button></Link> }
			<hr />

			<Routes>
				<Route path="/join" element={<Join />} />
				<Route path="/mypage" element={isLogin ===true ?<Mypage/>:<Navigate to="/login"/>} >
					<Route path="changepw" element= {<ChangePw/>}/>
					<Route path="changeinfo" element= {<ChangeInfo/>}/>
				</Route>

				
				<Route path="/" element={<Home />} />
				<Route path="/Chat" element={<Chat />} />
				
				<Route path="/board" element={<Board />} />
				<Route path="/board1" element={<Board1 />} />
				<Route path="/ItemInsert" element={<ItemInsert />} />
				<Route path="/ItemList" element={<ItemList />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={isLogin ===true ?<Logout/>:<Navigate to="/login"/>} />
				
				<Route path="/board/write" element={<BoardWrite />} />
				<Route path="/board/content" element={<BoardContent />} />
			</Routes>

			<Footer title="방가방가"></Footer>
		</div>
	)
}

export default App