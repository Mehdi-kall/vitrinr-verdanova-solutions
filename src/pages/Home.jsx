import ShuffleHero from '../components/Hero';
import NavigationBar from '../components/Navbar';

export default function Home() {
    return(
    <>
    {/* En-tête avec logo et Navbar */}
    <header className="sticky-top bg-light shadow-sm">
        <div className="container-fluid fixed-top">
            <div className="d-flex align-items-center">
                {/* Logo aligné à gauche */}
                <a href="/" className="me-auto">
                    <img 
                        src="../../src/assets/images/logo.png" 
                        alt="logo-verdanova" 
                        className="py-2" 
                        style={{ height: '100px' }}
                    />
                </a>
                
                {/* Votre composant Navbar existant */}
                <div className="col-10 col-sm-11 col-md-10 ms-auto ">
                    <NavigationBar />
                </div>
            </div>
        </div>
    </header>

    {/* Section Hero avec marge supérieure */}
    <main style={{ marginTop: '80px' }}>
        <ShuffleHero />
    </main>
</>
);
}

