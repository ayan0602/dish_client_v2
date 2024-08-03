from flask import Flask, render_template, jsonify, request
from Updater import instantiate_updaters

app = Flask(__name__)
app.app_context().push()

instantiate_updaters(app)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/api/app', methods=['GET', 'POST'])
def dish_application():
    if request.method == 'POST':
        return render_template('app.html')
    elif request.method == 'GET':
        return render_template('app.html', nav='app')

if __name__ == "__main__":
    app.run(debug=True)