import HeaderComponent from "./features/header/HeaderComponent";
import VisualComponents from "./features/main_visual/VisualComponents";

function App() {
  return (
    <div>
      <HeaderComponent />
      <main className="flex flex-col items-center">
        <VisualComponents />
      </main>
    </div>
  );
}

export default App;
