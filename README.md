# Carzpsot

Carzpsot is a React.js application designed to help users shop for car accessories, set reminders for car services, and find nearby mechanics. The application aims to provide a seamless experience for managing various aspects of car maintenance and accessories.

## Project Overview

- Carzpsot offers the following features:
- **Accessory Shopping:** Browse and purchase a variety of car accessories.
- **Service Reminders:** Set reminders for upcoming car services to ensure timely maintenance.
- **Mechanic Finder:** Locate nearby mechanics based on the user's location.

## Technologies Used

- **Machine Learning:** LSTM (Long Short-Term Memory)
- **Web Framework:** Flask
- **Frontend:** HTML, CSS
- **Data Processing:** pandas, numpy
- **Plotting:** matplotlib
- **Hyperparameter Tuning:** Keras Tuner (optional, for advanced users)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/rishisundarc/stock-prediction-lstm.git
    cd stock-prediction-lstm
    ```

2. **Create a virtual environment (optional but recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Download the dataset:**

    Ensure that you have the required dataset files (e.g., `AAPL_last_two_months_data.csv`) in the project directory.

## Usage

1. **Run the Flask application:**

    ```bash
    python app.py
    ```

2. **Access the web application:**

    Open your web browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to interact with the application.

   - **Home Page:** Displays the main interface for selecting a company and viewing predictions.
   - **Prediction Page:** Shows the predicted price for the next day and a plot of historical prices.

## Project Structure

- `app.py`: The main Flask application file that includes routes and logic.
- `data_preparation.py`: Contains functions for preparing data and training the model.
- `lstm_stock_model.h5`: The trained LSTM model file.
- `templates/`: Contains HTML files for the web interface.
- `static/`: Contains CSS files and other static assets.
- `requirements.txt`: Lists the Python dependencies.

## Requirements

Ensure you have the following Python packages installed:

- Flask
- pandas
- numpy
- matplotlib
- tensorflow
- keras-tuner (optional, for hyperparameter tuning)

You can install all dependencies using:

```bash
pip install flask pandas numpy matplotlib tensorflow keras-tuner
