import json

DB_PATH = 'PORTAL_ESTUDIO/videos_data.js'

new_videos = [
    (58, 'Video_58_Decreto_915_Parte2.md'),
    (59, 'Video_59_Retroalimentacion_Simulacro1.md'),
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
