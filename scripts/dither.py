from PIL import Image
import os

directory = 'img_unprocessed'
for filename in os.listdir(directory):
    img = Image.open(os.path.join(directory, filename))
    img = img.convert('1', dither=Image.FLOYDSTEINBERG)
    img.save(os.path.join('../source/assets/attachments', filename))
    os.remove(os.path.join(directory, filename))
