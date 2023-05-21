import os

directory = "./src/assets/Profielfotos"
ppics = []

for filename in os.listdir(directory):
  # ppics.append("assets/ppics/" + filename)
  ppics.append(filename)

print(ppics)
