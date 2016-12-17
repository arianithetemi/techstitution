from flask import Blueprint, render_template, request
from bson import json_util, ObjectId
mod_main = Blueprint('main', __name__)

from app import mongo

@mod_main.route('/', methods=['GET', 'POST'])
def index():

	db = mongo.db.form_data

	if request.method == 'GET':
		return render_template('index.html')
	elif request.method == 'POST':
		data = request.form.to_dict()
		db.insert(data)
		# db = mongo.db.arkep.insert(request.form.to_dict())
		return render_template('index.html')
	else:
		return "Bad Request"


@mod_main.route('/<string:id>', methods=["GET"])
def get_doc(id):

	db = mongo.db.form_data
	if request.method == 'GET':
		doc = db.find_one({"_id": ObjectId(id)})
		# doc_json = json_util.dumps(doc)
		return render_template('results.html', doc=doc)
	else:
		return "Bad Request"