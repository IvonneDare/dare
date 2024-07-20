to_do = ["dirigirnos al hote",
         "ir a almorzar",
         "Visitar mueso",
         "Volver al hotel"]

print (to_do)
numeros = [1,2,3,4, "cinco"]


mix =["uno",2,3,4.45 , True , [1,2,4,5]]
print (type(mix))
print (len(mix))
print ("Primer elemento:", mix [0])
print ("Segundo elemnto: ", mix [-1])
print (mix[0:3])

print (mix)
mix.append(False)
print (mix)
mix.insert(1,["a","b"])
print (mix)
print (mix.index(["a","b"]))

numero_1 = [1,4,5,78,100,20, 100.1]
print (numero_1)
print ("Numero mayor: ", max(numero_1))
print ("Numero menor: ", min(numero_1))

del numero_1 [-1]
print (numero_1)
del numero_1 [0:2]
print (numero_1)