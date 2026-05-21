import os
import glob
import re

# 1. Create dept_cockroach.html
cockroach_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dept. of Cockroach Crushing - MJP</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="background-overlay"></div>
    
    <div class="nav-bar" style="position: absolute; top: 2rem; left: 2rem; display: flex; gap: 1.5rem;">
        <a href="departments.html" class="nav-link" style="color: var(--text-muted); text-decoration: none; font-weight: 500;">← Back to Departments</a>
    </div>

    <main class="manifesto-container" style="margin-top: 5rem; text-align: center;">
        <div style="font-size: 5rem; margin-bottom: 1rem;">🪳🔨</div>
        <h1>Dept. of Cockroach Crushing</h1>
        <p style="color: var(--text-muted); font-size: 1.25rem; max-width: 600px; margin: 0 auto 3rem;">Ensuring pristine street food hygiene by eradicating pests with extreme prejudice. Not on our watch.</p>

        <div class="grid" style="display: flex; justify-content: center; gap: 2rem; max-width: 800px; margin: 0 auto;">
            <div class="card" style="flex: 1;">
                <h3 style="color: var(--primary-color);">Head Exterminator</h3>
                <p style="font-size: 1.5rem; font-weight: 500; margin-top: 1rem;">[Assign Head Here]</p>
            </div>
            <div class="card" style="flex: 1;">
                <h3 style="color: var(--primary-color);">Vice Exterminator</h3>
                <p style="font-size: 1.5rem; font-weight: 500; margin-top: 1rem;">[Assign Vice Head Here]</p>
            </div>
        </div>
    </main>
</body>
</html>"""

with open("dept_cockroach.html", "w") as f:
    f.write(cockroach_html)

# 2. Update departments.html
with open("departments.html", "r") as f:
    content = f.read()

new_card = """
            <a href="dept_cockroach.html" class="policy-link"><div class="card policy-card">
                <div class="icon">🪳🔨</div>
                <h3>Dept. of Cockroach Crushing</h3>
                <p>Ensuring pristine street food hygiene by eradicating pests with extreme prejudice. Not on our watch.</p>
            </div></a>
"""
if "Dept. of Cockroach Crushing" not in content:
    content = content.replace("</div>\n    </main>", new_card + "        </div>\n    </main>")
    with open("departments.html", "w") as f:
        f.write(content)

# 3. Add Gallery to all dept_*.html
gallery_html = """
        <div style="margin-top: 4rem; text-align: left;">
            <h2 style="color: var(--primary-color); text-align: center; margin-bottom: 2rem;">📸 Department Gallery</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div style="height: 150px; background: rgba(255,140,0,0.1); border: 1px dashed var(--primary-color); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); cursor: pointer;" onclick="alert('Upload image feature coming soon!')">+ Add Photo</div>
                <div style="height: 150px; background: rgba(255,140,0,0.1); border: 1px dashed var(--primary-color); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); cursor: pointer;" onclick="alert('Upload image feature coming soon!')">+ Add Photo</div>
                <div style="height: 150px; background: rgba(255,140,0,0.1); border: 1px dashed var(--primary-color); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); cursor: pointer;" onclick="alert('Upload image feature coming soon!')">+ Add Photo</div>
            </div>
        </div>
"""

for file in glob.glob("dept_*.html"):
    with open(file, "r") as f:
        html = f.read()
    
    if "📸 Department Gallery" not in html:
        # insert before </main>
        html = html.replace("</main>", gallery_html + "\n    </main>")
        with open(file, "w") as f:
            f.write(html)
