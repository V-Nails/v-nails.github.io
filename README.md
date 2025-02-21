<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>V-Nails | Luxury Nail Care</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }
        body {
            background-color: #fce4ec; /* Soft pink */
            color: #4a4a4a;
            text-align: center;
        }
        header {
            background-color: #e91e63; /* Luxurious pink */
            color: white;
            padding: 20px;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 40px;
        }
        .card {
            background: linear-gradient(135deg, #f8bbd0, #fce4ec);
            border: 2px solid #f48fb1;
            border-radius: 15px;
            width: 300px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-10px);
        }
        .card img {
            width: 100%;
            border-radius: 10px;
        }
        footer {
            background-color: #e91e63;
            color: white;
            padding: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>V-Nails - Luxury Nail Care</header>
    <div class="container">
        <div class="card">
            <img src="manicure.jpg" alt="Manicure Service">
            <h2>Manicure</h2>
            <p>Perfectly polished nails with our luxury manicure services.</p>
        </div>
        <div class="card">
            <img src="pedicure.jpg" alt="Pedicure Service">
            <h2>Pedicure</h2>
            <p>Indulge in a relaxing pedicure for soft and elegant feet.</p>
        </div>
        <div class="card">
            <img src="nailart.jpg" alt="Nail Art">
            <h2>Nail Art</h2>
            <p>Stunning designs to elevate your nails to the next level.</p>
        </div>
    </div>
    <footer>&copy; 2025 V-Nails | Luxury Nail Services</footer>
</body>
</html>
