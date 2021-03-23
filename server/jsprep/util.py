def order_objects_by_position(objects):
    if (objects is not None):
        sorted_objects = objects.order_by('-date_created')
        sorted_objects = sorted(sorted_objects, key = lambda y: (y['position']))
        count = len(sorted_objects)
        last_object = sorted_objects[count - 1]
        if (last_object is not None):
            for idx, val in enumerate(sorted_objects):
                    val.position=idx + 1
                    val.save()