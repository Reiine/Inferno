import React from 'react';

function Footer() {
    const [text, setText] = useState("");

  useEffect(() => {
        fetch("/example.txt")
          .then((response) => response.text())
          .then((data) => setText(data))
          .catch((err) => console.error("Error loading text file:", err));
      }, []);
    
    return ( 
        <footer>
            <p>Copyright © 2023 Reiine Iangar. All Rights Reserved</p>
            <p>Loaded from - {text} </p>
        </footer>
     );
}

export default Footer;
