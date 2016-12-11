from flask import Blueprint, render_template, request

mod_main = Blueprint('main', __name__)


@mod_main.route('/', methods=['GET'])
def index():
    return "Welcome to the ARKEP App."

@mod_main.route('/form', methods=['GET', 'POST'])
def main():
	if request.method == 'GET':
		return render_template('index.html')
	elif request.methods == 'POST':
		return render_template('index.html')

@mod_main.route('/reports', methods=['GET'])
def report():
	return render_template('reports.html');