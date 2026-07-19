import json

DB_PATH = 'PORTAL_ESTUDIO/videos_data.js'

new_videos = [
    (51, 'Video_51_Lectura_Critica_Parte3.md'),
    (52, 'Video_52_Lectura_Critica_Parte4.md'),
    (53, 'Video_53_Guia_34_Autoevaluacion.md'),
    (54, 'Video_54_Simulacro_Guia_34.md'),
    (55, 'Video_55_Valores_Servidor_Publico.md'),
    (56, 'Video_56_Ofimatica_Prueba_Escrita.md'),
    ('56B', 'Video_56B_Anuncio_Oficial_Vacantes.md'),
    (57, 'Video_57_Preguntas_y_Respuestas_Parte2.md'),
]

with open(DB_PATH, encoding='utf-8-sig') as f:
    raw = f.read().strip()

assert raw.startswith('const VIDEOS_DB = ') and raw.endswith('];'), 'formato inesperado'
db = json.loads(raw[len('const VIDEOS_DB = '):].rstrip(';'))
print('entradas actuales:', len(db))

existing_ids = {str(v['id']) for v in db}
for vid, fname in new_videos:
    if str(vid) in existing_ids:
        print(f'  id {vid} ya existe, se omite')
        continue
    with open(fname, encoding='utf-8') as f:
        content = f.read()
    title = content.split('\n', 1)[0].lstrip('# ').strip()
    db.append({'id': vid, 'title': title, 'file': fname, 'content': content})
    print(f'  + {vid}: {title}')

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write('﻿const VIDEOS_DB = ' + json.dumps(db, ensure_ascii=False) + ';')

print('total final:', len(db))
