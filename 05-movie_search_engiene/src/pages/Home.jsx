import MovieBox from "../components/MovieBox"
import InputField from "../components/InputField"
import Footer from "../components/Footer"
import styles from './Home.module.css'

function Home({movies,setSearch}){
  return (
    <main className={styles.home}>
      <InputField setSearch={setSearch} />
      <p>현재 표시 중인 영화: {movies.length}편</p>
      <MovieBox movies={movies} />
      <Footer />
    </main>
  )
}

export default Home