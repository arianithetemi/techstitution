from flask import Blueprint, render_template, request, redirect, url_for
from bson import json_util, ObjectId
mod_main = Blueprint('main', __name__)
from werkzeug import secure_filename
from os.path import join, dirname, realpath, os

UPLOAD_FOLDER = join(dirname(realpath(__file__)), "../static/uploads/")

from app import mongo

@mod_main.route('/', methods=['GET', 'POST'])
def index():
	db = mongo.db.form_data
	if request.method == 'GET':
		return render_template('index.html')
	elif request.method == 'POST':
		data = request.form.to_dict()
		db.insert(data)
		
		file = request.files['certifikata_regjistrimit_biznesit']
		file2 = request.files['kopje_certifikates_numrit_fiskal']
		file3 = request.files['kopje_dokumentit_informate_mbi_biznesin']

		filename = file.filename
		filename2 = file2.filename
		filename3 = file3.filename
		
		file.save(os.path.join(UPLOAD_FOLDER, filename))
		file2.save(os.path.join(UPLOAD_FOLDER, filename2))
		file3.save(os.path.join(UPLOAD_FOLDER, filename3))
		return redirect(url_for('main.index'))
	else:
		return "Bad Request"


@mod_main.route('/<string:id>', methods=["GET"])
def get_data(id):
	db = mongo.db.form_data
	if request.method == 'GET':
		doc = db.find_one({"_id": ObjectId(id)})
		# doc_json = json_util.dumps(doc)
		return render_template('result.html', doc=doc)
	else:
		return "Bad Request"

@mod_main.route('/lista', methods=['GET'])
def get_data_from_db():
	db = mongo.db.form_data
	all_data_from_db = db.find()
	return render_template('list.html', dataFromDB=all_data_from_db)

@mod_main.route('/remove/<string:id>', methods=['GET'])
def remove_data(id):
	db = mongo.db.form_data
	if request.method == 'GET':
		doc = db.remove({"_id": ObjectId(id)})
		return redirect(url_for('main.get_data_from_db'))
	else:
		return "Bad Request"