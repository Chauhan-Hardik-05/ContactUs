import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactHeader from "./components/ContactHeader";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="mainContainer">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
