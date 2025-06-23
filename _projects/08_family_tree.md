---
name: Family Tree Website
tools: [Python, Django, Wagtail, Web development]
image: /assets/images/projects/family_tree/thumbnail.png
description: A platform for managing/exploring a family tree
---

<br>

# Family tree website: **[new.omaritree.com](https://new.omaritree.com/)**

<br>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Waum7KQJLlw?si=10UK-LNgRoNqCKUI" allowfullscreen></iframe>
</div>

<br>


## Description

A platform for storing, browsing, and updating a family tree, made using Django.

[Live Demo](https://new.omaritree.com/).

[GitHub repo](https://github.com/hasauino/family-tree)

It has the following features:

- [x] Users can add new people, navigate the tree (interactively), and search from a root to any person at once.
- [x] Supported languages: English, and Arabic. (configurable only during deployment).
- [x] Backups every day at 3:00 am. With a restore DB page accessible to staff users.
- [x] User registration through email.
- [x] Staff users see notification on new additions (newly added persons).
- [x] Normal users can add new persons to the tree, but these additions are **local** and only visible to the user. Once they are published by a staff member, these additions will become **global**.
- [x] Help and about page are editable using [Wagtail](https://wagtail.org/) CMS.
- [x] Staff users can add shortcuts (bookmarks), which can be further customized (color, font color, size, and overwrite label).