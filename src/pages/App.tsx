import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import ThemeList from '../components/lists/ThemeList';
import PostList from '../components/lists/PostList';
import ThemeForm from '../components/forms/ThemeForm';
import PostForm from '../components/forms/PostForm';
import DeleteTheme from '../components/delete/DeleteTheme';
import DeletePost from '../components/delete/DeletePost';
import Profile from '../components/profile/Profile';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/cadastrar" element={<RegisterForm />} />
                <Route path="/temas" element={<ThemeList />} />
                <Route path="/postagens" element={<PostList />} />
                <Route path="/tema/novo" element={<ThemeForm />} />
                <Route path="/tema/editar/:id" element={<ThemeForm />} />
                <Route path="/postagem/nova" element={<PostForm />} />
                <Route path="/postagem/editar/:id" element={<PostForm />} />
                <Route path="/tema/deletar/:id" element={<DeleteTheme />} />
                <Route path="/postagem/deletar/:id" element={<DeletePost />} />
                <Route path="/perfil" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;