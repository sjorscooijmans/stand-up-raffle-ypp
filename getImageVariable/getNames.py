import os

directory = "./src/assets/ppics"
ppics = []

for filename in os.listdir(directory):
  # ppics.append("assets/ppics/" + filename)
  ppics.append(filename)

print(ppics)
